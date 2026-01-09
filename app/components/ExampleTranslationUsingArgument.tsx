"use client"

import { useTranslations } from "next-intl"

// For this to work on the client side, the application must be wrapped in a `<NextIntlClientProvider>` (see layout.tsx line 31)
const ExampleTranslationUsingArgument = () => {
    const t = useTranslations();

    return (
      <>
        <h2>{t('helloMessage', {name: 'Bob'})}</h2>

      </>
    )
}

export default ExampleTranslationUsingArgument