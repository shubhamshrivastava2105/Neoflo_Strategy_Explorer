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

  const { comment, name, email, section, sectionId, xPct, yPct, url } = req.body || {};

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

  // Anchor metadata — embedded so the frontend can reposition pins on page load.
  const meta = {
    v: 1,
    sectionId: typeof sectionId === 'string' ? sectionId.slice(0, 100) : null,
    xPct: typeof xPct === 'number' && Number.isFinite(xPct) ? Math.max(0, Math.min(1, xPct)) : null,
    yPct: typeof yPct === 'number' && Number.isFinite(yPct) ? Math.max(0, Math.min(1, yPct)) : null,
    section: sectionLabel,
    page: safeUrl,
    from: safeName,
    email: safeEmail || undefined,
    createdAt: new Date().toISOString(),
  };

  const bodyLines = [
    `<!-- neoflo-meta-v1`,
    JSON.stringify(meta),
    `-->`,
    '',
    `**Section:** ${sectionLabel}`,
    `**From:** ${safeName}${safeEmail ? ` (${safeEmail})` : ''}`,
    safeUrl ? `**Page:** ${safeUrl}` : null,
    `**Submitted:** ${meta.createdAt}`,
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
      body: JSON.stringify({ title, body: bodyLines.join('\n') }),
    },
  );

  if (!ghRes.ok) {
    const errText = await ghRes.text();
    console.error('GitHub API error:', ghRes.status, errText);
    let hint = '';
    if (ghRes.status === 401) hint = ' (token invalid or revoked)';
    else if (ghRes.status === 403) hint = ' (token lacks Issues:write or repo access)';
    else if (ghRes.status === 404) hint = ' (repo not found or Issues disabled)';
    else if (ghRes.status === 410) hint = ' (Issues disabled on this repo)';
    return res.status(502).json({ error: `Failed to record comment — GitHub returned ${ghRes.status}${hint}` });
  }

  const issue = await ghRes.json();
  return res.status(200).json({
    ok: true,
    issueNumber: issue.number,
    issueUrl: issue.html_url,
    comment: {
      number: issue.number,
      anchor: { sectionId: meta.sectionId, xPct: meta.xPct, yPct: meta.yPct },
      section: meta.section,
      from: meta.from,
      createdAt: meta.createdAt,
      text: trimmedComment,
      htmlUrl: issue.html_url,
      state: 'open',
    },
  });
}
