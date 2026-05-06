const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || 'admin@neoflo.ai').toLowerCase();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'neofloadmin@2026';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'nf-admin-strategy-2026-7b3c2d1f8e9a4b6c';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).send('Method not allowed');
    return;
  }

  const { email, password } = req.body || {};

  if (typeof email !== 'string' || typeof password !== 'string') {
    res.redirect(302, '/admin-login.html?error=1');
    return;
  }

  if (email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    res.setHeader(
      'Set-Cookie',
      `nf_admin=${ADMIN_TOKEN}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${COOKIE_MAX_AGE}`,
    );
    res.redirect(302, '/admin.html');
    return;
  }

  res.redirect(302, '/admin-login.html?error=1');
}
