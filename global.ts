import enUs from './messages/en-US.d.json';

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof enUs;
  }
}