"use client"
import { getLocale, setLocale } from '@/src/services/cookies';
import { useEffect, useState } from 'react';

const LocalePicker = () => {

    const [localeToDisplay, setLocaleToDisplay] = useState('')

    useEffect(() => {
        const getLocaleFunction = async () => {
            const locale = await getLocale() 
            setLocaleToDisplay(locale)

        }

        getLocaleFunction()
    })


  const languages = [
    { code: 'en-US', label: 'English (US)', flag: '🇺🇸' },
    { code: 'fr-CA', label: 'Français (CA)', flag: '🇨🇦' },
  ];

  return (
    <div className="flex flex-col items-center rounded-xl shadow-md border">
      <div className="relative inline-block w-64">
        <select
          value={localeToDisplay}
          onChange={(e) => setLocale(e.target.value)}
          className="block w-full appearance-none bg-gray-50 border text-gray-900 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer transition-all"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.label}
            </option>
          ))}
        </select>
        
        {/* Custom Arrow Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      
      <div className="mt-4 text-xs font-mono text-gray-400">
        Current Locale Code: {localeToDisplay}
      </div>
    </div>
  );
};

export default LocalePicker;