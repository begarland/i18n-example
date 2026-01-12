import { useFormatter, useTranslations } from "next-intl"

const ExampleTranslationUsingNumberFormatting = () => {
    const t = useTranslations()
    const format = useFormatter()
    return (
      <div className="border-b flex flex-col items-center justify-center p-10 space-y-6">
        <p className="bold">{t('Price')}:</p>
        <p>{format.number(499.9, {style: 'currency', currency: 'USD'})}</p>
      </div>
    )
}

export default ExampleTranslationUsingNumberFormatting