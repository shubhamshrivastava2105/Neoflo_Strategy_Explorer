const EMAIL = 'strategyneoflo@neoflo.ai';
const PASSWORD = 'neoflo@2026';
const TOKEN = process.env.AUTH_TOKEN || 'nf-strategy-2026-3a8f9d2c1b7e6f4a';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).send('Method not allowed');
    return;
  }

  const { email, password } = req.body || {};

  if (typeof email !== 'string' || typeof password !== 'string') {
    res.redirect(302, '/login.html?error=1');
    return;
  }

  if (email.trim().toLowerCase() === EMAIL && password === PASSWORD) {
    res.setHeader(
      'Set-Cookie',
      `nf_auth=${TOKEN}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${COOKIE_MAX_AGE}`,
    );
    res.redirect(302, '/');
    return;
  }

  res.redirect(302, '/login.html?error=1');
}
