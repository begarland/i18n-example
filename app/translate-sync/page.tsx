import { useTranslations } from "next-intl";

export default function Page () {
      const t = useTranslations();

    return (
       <section>
      <h1>{t('heroTitle')}</h1>
    </section>
    )
}
