import { defineRouting } from 'next-intl/routing';

export type AppLocale = 'en' | 'pt';

export const availableLocales: AppLocale[] = ['en', 'pt'];
export const defaultLocale: AppLocale = 'en';

export const routing = defineRouting({
  locales: availableLocales,
  defaultLocale: defaultLocale,
  localeDetection: true,
});
