import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Define protected routes on the user side that require authentication
  const protectedUserRoutes = [
    '/profile',
    '/wishlist',
    '/order-tracking',
    '/checkout',
    '/cart'
  ];

  // Check if current path matches any protected user route
  const isProtectedUserRoute = protectedUserRoutes.some(route => pathname.startsWith(route));

  // Check tokens safely
  const accessToken = request.cookies.has('accessToken') || request.cookies.get('accessToken');
  const refreshToken = request.cookies.has('refreshToken') || request.cookies.get('refreshToken');
  
  // Fallback to raw cookie header in case Next.js cookie parser fails due to duplicate path cookies
  const rawCookieHeader = request.headers.get('cookie') || '';
  const hasTokenInHeader = rawCookieHeader.includes('accessToken=') || rawCookieHeader.includes('refreshToken=');

  const isAuthenticated = !!accessToken || !!refreshToken || hasTokenInHeader;

  if (isProtectedUserRoute && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    // Optional: Pass the intended destination to redirect back after login
    // loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Also protect admin routes, redirecting unauthenticated users to the admin login page
  if (pathname.startsWith('/admin') && pathname !== '/admin/login' && !isAuthenticated) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

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
