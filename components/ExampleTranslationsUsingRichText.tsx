"use client"
import Link from "next/link"
import { useTranslations } from "use-intl"

const ExampleTranslationUsingRichText = () => {
    const t = useTranslations()
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <p>{t.rich('linkExample', { link: (chunks) => <Link className='underline' href="/">{chunks}</Link>})}</p>
      </div>
    )
}

export default ExampleTranslationUsingRichText