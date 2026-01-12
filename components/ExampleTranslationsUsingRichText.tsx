"use client"
// For i18n to work on the client side, the application must be wrapped in a `<NextIntlClientProvider>` (see layout.tsx line 31)

import Link from "next/link"
import { useTranslations } from "use-intl"

const ExampleTranslationUsingRichText = () => {
    const t = useTranslations()
    return (
      <div className="border-b flex flex-col items-center justify-center p-4">
        <p>{t.rich('linkExample', { link: (chunks) => <Link className='underline' href="/">{chunks}</Link>})}</p>
      </div>
    )
}

export default ExampleTranslationUsingRichText