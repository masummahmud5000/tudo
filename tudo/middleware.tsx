import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const access = request.cookies.get("access_token")?.value;
  const refresh = request.cookies.get("refresh_token")?.value;

  const { pathname } = request.nextUrl;

  // Auth pages (login / register)
  const isAuthPage = pathname === "/signIn" || pathname === "/signUp";

  if (isAuthPage) {
    // If already logged in → redirect to dashboard
    if (access) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }

  // Protected routes
  const isProtectedRoute = pathname.startsWith("/dashboard");

  if (isProtectedRoute) {
    // If no access token → redirect to login
    if (!access) {
      return NextResponse.redirect(new URL("/signIn", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [/*"/dashboard/:path*",*/ "/signIn", "/signUp"],
};