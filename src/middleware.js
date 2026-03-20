// src/middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  // Demo purpose ke liye assume kar rahe hain 'auth-token' cookie mein hoga
  const token = request.cookies.get('auth-token')?.value
  const isAuthRoute = request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup')

  if (!token && !isAuthRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}