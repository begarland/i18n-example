import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations()
  
  return (
    <div className="flex flex-col min-h-screen  items-center justify-center gap-5 bg-zinc-50 font-sans dark:bg-black">

      <div className="flex flex-col gap-3 w-sm items-start">  
        <h2>{t("Home.i18nTitle")}</h2>
        <a className='underline font-bold ms-5' href='/translate-sync'>{t("Home.synchronous")}</a>
        <a className='underline font-bold ms-5' href='/translate-async'>{t('Home.async')}</a>
        <a className='underline font-bold ms-5' href='/translate-helpers'>{t('Home.helpers')}</a>

      </div>



      <div className="flex flex-col gap-3 w-sm items-start">
        <h2>{t('Home.contentfulTitle')}</h2>
          <a className='underline font-bold ms-5' href='/contentful'>{t('Home.pullContentful')}</a>
          <a className='underline font-bold ms-5' href='/upload-to-contentful'>{t('Home.pushContentful')}</a>
      </div>
    </div>
  );
}
