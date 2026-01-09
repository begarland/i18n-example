import { getTranslations } from "next-intl/server";

export default async function Page () {
      const t = await getTranslations();

    return (
      <section>
        <h1>{t('heroTitle')}</h1>
      </section>
    )
}

