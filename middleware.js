export const config = {
  matcher: [
    '/((?!login\\.html|login$|api/|favicon\\.ico|design_tokens\\.css|_vercel/|_next/).*)',
  ],
};

const TOKEN = process.env.AUTH_TOKEN || 'nf-strategy-2026-3a8f9d2c1b7e6f4a';

export default function middleware(req) {
  const cookieHeader = req.headers.get('cookie') || '';
  const match = cookieHeader.match(/(?:^|;\s*)nf_auth=([^;]+)/);

  if (match && match[1] === TOKEN) {
    return;
  }

  const url = new URL('/login.html', req.url);
  return Response.redirect(url, 307);
}
