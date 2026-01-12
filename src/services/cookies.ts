'use server';

import {cookies} from 'next/headers';

const config = {
  locales: ['en-US', 'fr-CA'],
  defaultLocale: 'en-US'
};

export async function getLocale() {
  const store = await cookies();
  const locale = store.get('NEXT_LOCALE');

  if (
    typeof locale?.value === 'string' &&
    config.locales.includes(locale.value)
  ) {
    return locale.value;
  }

  return config.defaultLocale;
}

export async function setLocale(locale: string) {
  const store = await cookies();
  store.set('NEXT_LOCALE', locale);
}