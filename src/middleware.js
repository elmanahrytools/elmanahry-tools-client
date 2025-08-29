import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // ✅ Read the token from cookies
  const token = req.cookies.get("token")?.value;

  // 🔒 If token exists, consider the user authenticated
  const isAuthenticated = !!token;

  // Redirect authenticated users away from the login page
  if (isAuthenticated === true && pathname === "/login") {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // Restrict access to /admin and any route under it if the user is not authenticated
  if (!isAuthenticated && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Redirect unauthenticated users to the login page, unless they're already on it
  if (!isAuthenticated && pathname === "/login") {
    return NextResponse.next();
  }

  // Allow request to proceed if authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/admin", "/admin/:path*"], // Match these routes
};
