"use client"
// For i18n to work on the client side, the application must be wrapped in a `<NextIntlClientProvider>` (see layout.tsx line 31)

import { useTranslations } from "next-intl"
import { useState } from "react";

const ExampleTranslationUsingArgument = () => {
    const t = useTranslations();
    const [displayName, setDisplayName] = useState<string>('Bob')
    const [name, setName] = useState<string>('')

    return (
      <div className="border-b p-10 flex flex-col gap-4">

        <div className="flex gap-2 flex-col items-center ">
          <input className="bg-white text-black p-2 rounded" value={name} onChange={(e) => setName(e.target.value)} />
          <button className="bg-blue-800 text-white bold rounded p-2" onClick={() => {setDisplayName(name); setName('')}}>{t('setDisplayName')}</button>
           <h2>{t('helloMessage', {name: displayName})}</h2>
        </div>
       
      </div>
    )
}

export default ExampleTranslationUsingArgument