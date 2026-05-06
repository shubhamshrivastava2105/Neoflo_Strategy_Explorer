export default function handler(req, res) {
  res.setHeader('Set-Cookie', 'nf_admin=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0');
  res.redirect(302, '/admin-login.html');
}
