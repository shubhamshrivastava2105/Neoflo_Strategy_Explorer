const REPO_OWNER = process.env.GITHUB_REPO_OWNER || 'shubhamshrivastava2105';
const REPO_NAME = process.env.GITHUB_REPO_NAME || 'Neoflo_Strategy_Explorer';
const TOKEN = process.env.GITHUB_TOKEN;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'nf-admin-strategy-2026-7b3c2d1f8e9a4b6c';

function isAdmin(req) {
  const cookieHeader = req.headers.cookie || req.headers.Cookie || '';
  const match = cookieHeader.match(/(?:^|;\s*)nf_admin=([^;]+)/);
  return Boolean(match && match[1] === ADMIN_TOKEN);
}

const GH_HEADERS = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'Content-Type': 'application/json',
  'User-Agent': 'neoflo-strategy-explorer-admin',
};

export default async function handler(req, res) {
  if (!isAdmin(req)) {
    return res.status(401).json({ error: 'Admin only' });
  }
  if (!TOKEN) {
    return res.status(500).json({ error: 'GITHUB_TOKEN not configured' });
  }

  if (req.method === 'GET') {
    const state = ['open', 'closed', 'all'].includes(req.query.state) ? req.query.state : 'open';
    const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues?state=${state}&per_page=100&sort=created&direction=desc`;
    const ghRes = await fetch(url, { headers: GH_HEADERS });
    if (!ghRes.ok) {
      const txt = await ghRes.text();
      console.error('GitHub list error:', ghRes.status, txt);
      return res.status(502).json({ error: 'Failed to fetch issues' });
    }
    const issues = await ghRes.json();
    // Filter out PRs (GitHub treats PRs as issues in this endpoint)
    const filtered = issues.filter((i) => !i.pull_request);
    return res.status(200).json({
      issues: filtered.map((i) => ({
        number: i.number,
        title: i.title,
        body: i.body || '',
        state: i.state,
        created_at: i.created_at,
        closed_at: i.closed_at,
        html_url: i.html_url,
        user: i.user && i.user.login,
      })),
    });
  }

  if (req.method === 'POST') {
    const { number, action } = req.body || {};
    if (typeof number !== 'number' || !['resolve', 'reopen'].includes(action)) {
      return res.status(400).json({ error: 'Invalid request: need {number: int, action: "resolve"|"reopen"}' });
    }
    const newState = action === 'resolve' ? 'closed' : 'open';
    const ghRes = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${number}`,
      {
        method: 'PATCH',
        headers: GH_HEADERS,
        body: JSON.stringify({ state: newState }),
      },
    );
    if (!ghRes.ok) {
      const txt = await ghRes.text();
      console.error('GitHub update error:', ghRes.status, txt);
      return res.status(502).json({ error: 'Failed to update issue' });
    }
    const issue = await ghRes.json();
    return res.status(200).json({
      ok: true,
      issue: {
        number: issue.number,
        state: issue.state,
        closed_at: issue.closed_at,
      },
    });
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Method not allowed' });
}
