"use client"
// For i18n to work on the client side, the application must be wrapped in a `<NextIntlClientProvider>` (see layout.tsx line 31)
import { useState } from "react"


const ExampleTranslationUsingCount = () => {
    const [count, setCount] = useState<number>(0)

    return (
      <> 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-64">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
              Current Count
            </h2>
            
            <div className="text-6xl font-extrabold text-gray-800 mb-8">
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
              className="mt-6 text-sm text-gray-500 hover:text-blue-600 font-medium transition-colors"
            >
              Reset Counter
            </button>
          </div>
        </div>
      </>
    )
}

export default ExampleTranslationUsingCount