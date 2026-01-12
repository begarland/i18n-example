"use client"
import { useTranslations } from "next-intl";
// For i18n to work on the client side, the application must be wrapped in a `<NextIntlClientProvider>` (see layout.tsx line 31)

import { useState } from "react";

const ExampleTranslationUsingSelect = () => {
    const [selectedColor, setSelectedColor] = useState('#ffffff');
    const t = useTranslations();

  const colors = [
    { name: 'White', value: '#ffffff' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Blue', value: '#0ea5e9' },
    { name: 'Green', value: '#10b981' },
    { name: 'Purple', value: '#8b5cf6' },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-10 space-y-6">
      <div className="text-center">        
        <select
          id="color-select"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="block w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
        >
          {colors.map((color) => (
            <option key={color.value} value={color.value}>
              {/* Remember to ALWAYS add an "other" option for select to work. */}
              {t('color', {color: color.name as any})}
            </option>
          ))}
        </select>
      </div>
      <div
        className="w-64 h-64 rounded-2xl border-4 border-white shadow-2xl transition-all duration-500 ease-in-out"
        style={{ backgroundColor: selectedColor }}
      >
        <div className="flex items-center justify-center h-full">
          <span className="bg-black/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-mono">
            {selectedColor.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExampleTranslationUsingSelect