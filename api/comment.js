const REPO_OWNER = process.env.GITHUB_REPO_OWNER || 'shubhamshrivastava2105';
const REPO_NAME = process.env.GITHUB_REPO_NAME || 'Neoflo_Strategy_Explorer';
const TOKEN = process.env.GITHUB_TOKEN;
const AUTH_TOKEN = process.env.AUTH_TOKEN || 'nf-strategy-2026-3a8f9d2c1b7e6f4a';

function isAuthenticated(req) {
  const cookieHeader = req.headers.cookie || req.headers.Cookie || '';
  const match = cookieHeader.match(/(?:^|;\s*)nf_auth=([^;]+)/);
  return Boolean(match && match[1] === AUTH_TOKEN);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isAuthenticated(req)) {
    return res.status(401).json({ error: 'Sign in to comment.' });
  }

  if (!TOKEN) {
    return res.status(500).json({ error: 'GITHUB_TOKEN not configured. Add it as a Vercel env var.' });
  }

  const { comment, name, email, section, url } = req.body || {};

  if (typeof comment !== 'string' || comment.trim().length < 3) {
    return res.status(400).json({ error: 'Comment too short (minimum 3 characters)' });
  }
  if (comment.length > 5000) {
    return res.status(400).json({ error: 'Comment too long (5000 character max)' });
  }

  const trimmedComment = comment.trim();
  const titlePreview = trimmedComment.length > 70
    ? trimmedComment.slice(0, 67).replace(/\s+\S*$/, '') + '…'
    : trimmedComment;
  const sectionLabel = (typeof section === 'string' && section.trim()) ? section.trim() : 'General';
  const title = `[${sectionLabel}] ${titlePreview}`;

  const safeName = (typeof name === 'string' && name.trim()) ? name.trim().slice(0, 100) : 'Anonymous';
  const safeEmail = (typeof email === 'string' && email.trim()) ? email.trim().slice(0, 200) : '';
  const safeUrl = (typeof url === 'string' && url.trim()) ? url.trim().slice(0, 500) : '';

  const bodyLines = [
    `**Section:** ${sectionLabel}`,
    `**From:** ${safeName}${safeEmail ? ` (${safeEmail})` : ''}`,
    safeUrl ? `**Page:** ${safeUrl}` : null,
    `**Submitted:** ${new Date().toISOString()}`,
    '',
    '---',
    '',
    trimmedComment,
  ].filter((line) => line !== null);

  const ghRes = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json',
        'User-Agent': 'neoflo-strategy-explorer',
      },
      body: JSON.stringify({
        title,
        body: bodyLines.join('\n'),
      }),
    },
  );

  if (!ghRes.ok) {
    const errText = await ghRes.text();
    console.error('GitHub API error:', ghRes.status, errText);
    return res.status(502).json({ error: 'Failed to record comment. Try again later.' });
  }

  const issue = await ghRes.json();
  return res.status(200).json({
    ok: true,
    issueNumber: issue.number,
    issueUrl: issue.html_url,
  });
}
