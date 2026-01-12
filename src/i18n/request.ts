
import {getRequestConfig} from 'next-intl/server';
import { getLocale } from '../services/cookies';

export default getRequestConfig(async () => {
  // Static for now, will be adapted later
  const locale = await getLocale();

  // Load messages from the filesystem
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages
  };
});