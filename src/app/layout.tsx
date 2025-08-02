import type { Metadata } from 'next';
import { Merriweather_Sans } from 'next/font/google';
import LocalFont from 'next/font/local';
import './globals.css';

const timesNewRoman = LocalFont({
  src: '../../public/fonts/times_new_roman.ttf',
  display: 'swap',
  variable: '--font-times-new-roman',
});

const merriweatherSans = Merriweather_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merryweather',
});

export const metadata: Metadata = {
  title: 'Instituto Pelo Ser',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweatherSans.className} ${timesNewRoman.variable} antialiased scroll-smooth`}>{children}</body>
    </html>
  );
}
