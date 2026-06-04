import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check tokens safely
  const accessToken = request.cookies.has('accessToken') || request.cookies.get('accessToken');
  const refreshToken = request.cookies.has('refreshToken') || request.cookies.get('refreshToken');
  
  // Fallback to raw cookie header in case Next.js cookie parser fails due to duplicate path cookies
  const rawCookieHeader = request.headers.get('cookie') || '';
  const hasTokenInHeader = rawCookieHeader.includes('accessToken=') || rawCookieHeader.includes('refreshToken=');

  const isAuthenticated = !!accessToken || !!refreshToken || hasTokenInHeader;

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets (images, fonts, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.webp|.*\\.woff2).*)',
  ],
};
