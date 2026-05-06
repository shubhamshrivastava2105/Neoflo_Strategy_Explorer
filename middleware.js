export const config = {
  matcher: [
    '/((?!login\\.html|login$|admin-login\\.html|admin-login$|api/|favicon\\.ico|design_tokens\\.css|_vercel/|_next/).*)',
  ],
};

const TOKEN = process.env.AUTH_TOKEN || 'nf-strategy-2026-3a8f9d2c1b7e6f4a';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'nf-admin-strategy-2026-7b3c2d1f8e9a4b6c';

export default function middleware(req) {
  const url = new URL(req.url);
  const cookieHeader = req.headers.get('cookie') || '';

  // Admin routes require admin cookie; redirect to admin login if missing.
  if (url.pathname.startsWith('/admin')) {
    const adminMatch = cookieHeader.match(/(?:^|;\s*)nf_admin=([^;]+)/);
    if (adminMatch && adminMatch[1] === ADMIN_TOKEN) {
      return;
    }
    return Response.redirect(new URL('/admin-login.html', req.url), 307);
  }

  // All other gated routes require the regular nf_auth cookie.
  const match = cookieHeader.match(/(?:^|;\s*)nf_auth=([^;]+)/);
  if (match && match[1] === TOKEN) {
    return;
  }

  return Response.redirect(new URL('/login.html', req.url), 307);
}
