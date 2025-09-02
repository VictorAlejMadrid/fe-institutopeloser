import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { Merriweather_Sans } from 'next/font/google';
import LocalFont from 'next/font/local';
import '../globals.css';

const timesNewRoman = LocalFont({
  src: '../../../public/fonts/times_new_roman.ttf',
  display: 'swap',
  variable: '--font-times-new-roman',
});

const merriweatherSans = Merriweather_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merryweather',
});

export const metadata: Metadata = {
  title: 'Instituto Pelo Ser',
  description: '',
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${merriweatherSans.className} ${timesNewRoman.variable} antialiased scroll-smooth`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
