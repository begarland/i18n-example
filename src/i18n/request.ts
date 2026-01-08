
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => {
  // Static for now, will be adapted later
  const locale = 'en-US';

  // Load messages from the filesystem
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages
  };
});