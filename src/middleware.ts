import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/access')) {
    if (!request.cookies.has('accessKey')) {
      return NextResponse.redirect(new URL('/access', request.url))
    }
    const accessKey = request.cookies.get('accessKey')
    if (accessKey?.value !== process.env.USER_PWD) {
      return NextResponse.redirect(new URL('/access', request.url))
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next|assets|favicon.ico|manifest.webmanifest).*)'],
}
