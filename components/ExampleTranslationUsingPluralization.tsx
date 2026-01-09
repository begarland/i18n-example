"use client"
import { useTranslations } from "next-intl"
// For i18n to work on the client side, the application must be wrapped in a `<NextIntlClientProvider>` (see layout.tsx line 31)
import { useState } from "react"


const ExampleTranslationUsingPluralization = () => {
    const t = useTranslations()
    const [count, setCount] = useState<number>(0)

    return (
      <> 
        <div className="flex flex-col items-center justify-center p-4">
          <div className="p-8 rounded-2xl shadow-xl text-center w-64">
            <div className="text-6xl font-extrabold mb-8">
              {count}
            </div>

            <div className="flex justify-between gap-4">
              <button
                onClick={() => setCount(count - 1)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-colors shadow-md active:transform active:scale-95"
              >
                −
              </button>
              
              <button
                onClick={() => setCount(count + 1)}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors shadow-md active:transform active:scale-95"
              >
                +
              </button>
            </div>

            <button
              onClick={() => setCount(0)}
              className="mt-6 text-sm hover:text-blue-600 font-medium transition-colors"
            >
              {t('global.reset')}
            </button>

            <p>{t("pluralizationExample", {count: count})}</p>
          </div>
        </div>
      </>
    )
}

export default ExampleTranslationUsingPluralization