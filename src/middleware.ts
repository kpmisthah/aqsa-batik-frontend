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

  // Check tokens
  const accessToken = request.cookies.get('accessToken');
  const refreshToken = request.cookies.get('refreshToken');
  const isAuthenticated = !!(accessToken || refreshToken);

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
