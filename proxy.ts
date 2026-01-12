import { NextResponse } from 'next/server';

export function proxy(request: { nextUrl: { clone: () => any; }; }) {
  const url = request.nextUrl.clone();
  const localeParam = url.searchParams.get('locale');

  if (localeParam) {
    // 1. Prepare the redirect URL by removing the 'locale' param
    url.searchParams.delete('locale');

    // 2. Create the redirect response
    const response = NextResponse.redirect(url);

    // 3. Attach the cookie to the redirect response
    response.cookies.set('NEXT_LOCALE', localeParam, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: 'lax',
    });

    return response;
  }

  // If no locale param exists, just continue as normal
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};