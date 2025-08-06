import { match } from '@formatjs/intl-localematcher';
import { NextResponse, NextRequest } from 'next/server';
import Negotiator from 'negotiator';
import { availableLocales, defaultLocale } from './util/app_locales';

function getLocale(request: NextRequest) {
  const headers = { 'accept-language': request.headers.get('accept-language') ?? '' };
  const languages = new Negotiator({ headers }).languages();

  const result = match(languages, availableLocales, defaultLocale);

  return result;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = availableLocales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
