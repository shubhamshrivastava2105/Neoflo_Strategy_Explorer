const REPO_OWNER = process.env.GITHUB_REPO_OWNER || 'shubhamshrivastava2105';
const REPO_NAME = process.env.GITHUB_REPO_NAME || 'Neoflo_Strategy_Explorer';
const TOKEN = process.env.GITHUB_TOKEN;
const AUTH_TOKEN = process.env.AUTH_TOKEN || 'nf-strategy-2026-3a8f9d2c1b7e6f4a';

function isAuthenticated(req) {
  const cookieHeader = req.headers.cookie || req.headers.Cookie || '';
  const match = cookieHeader.match(/(?:^|;\s*)nf_auth=([^;]+)/);
  return Boolean(match && match[1] === AUTH_TOKEN);
}

const GH_HEADERS = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'Content-Type': 'application/json',
  'User-Agent': 'neoflo-strategy-explorer',
};

const META_REGEX = /<!--\s*neoflo-meta-v1\s*([\s\S]+?)\s*-->/;

function parseIssueMeta(body) {
  if (!body) return null;
  const match = body.match(META_REGEX);
  if (!match) return null;
  try {
    return JSON.parse(match[1]);
  } catch (e) {
    return null;
  }
}

function extractCommentText(body) {
  if (!body) return '';
  // Strip the meta block and the standard header lines (Section / From / Page / Submitted / ---)
  const withoutMeta = body.replace(META_REGEX, '').trim();
  const idx = withoutMeta.indexOf('\n---\n');
  return idx === -1 ? withoutMeta : withoutMeta.slice(idx + 5).trim();
}

export default async function handler(req, res) {
  if (!isAuthenticated(req)) {
    return res.status(401).json({ error: 'Sign in to view comments.' });
  }
  if (!TOKEN) {
    return res.status(500).json({ error: 'GITHUB_TOKEN not configured' });
  }

  if (req.method === 'GET') {
    const state = ['open', 'closed', 'all'].includes(req.query.state) ? req.query.state : 'open';
    const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues?state=${state}&per_page=100&sort=created&direction=asc`;
    const ghRes = await fetch(url, { headers: GH_HEADERS });
    if (!ghRes.ok) {
      const txt = await ghRes.text();
      console.error('GitHub list error:', ghRes.status, txt);
      return res.status(502).json({ error: 'Failed to fetch comments' });
    }
    const issues = await ghRes.json();
    // Filter out PRs (GitHub returns PRs in this endpoint too)
    const filtered = issues.filter((i) => !i.pull_request);
    const comments = filtered.map((i, idx) => {
      const meta = parseIssueMeta(i.body) || {};
      return {
        number: i.number,
        index: idx + 1,
        title: i.title,
        text: extractCommentText(i.body),
        anchor: meta.sectionId
          ? { sectionId: meta.sectionId, xPct: meta.xPct, yPct: meta.yPct }
          : null,
        section: meta.section || 'General',
        from: meta.from || 'Anonymous',
        createdAt: meta.createdAt || i.created_at,
        page: meta.page || null,
        state: i.state,
        closedAt: i.closed_at,
        htmlUrl: i.html_url,
      };
    });
    return res.status(200).json({ comments });
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
      return res.status(502).json({ error: 'Failed to update comment' });
    }
    const issue = await ghRes.json();
    return res.status(200).json({
      ok: true,
      number: issue.number,
      state: issue.state,
      closedAt: issue.closed_at,
    });
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Method not allowed' });
}
