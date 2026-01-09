import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  items-center justify-center gap-5 bg-zinc-50 font-sans dark:bg-black">

      <div className="flex flex-col gap-3 w-sm items-start">  
        <h2>i18n Examples</h2>
        <a className='underline font-bold ms-5' href='/translate-sync'>Synchronous useTranslate example</a>
        <a className='underline font-bold ms-5' href='/translate-async'>Asynchronous getTranslate example</a>
        <a className='underline font-bold ms-5' href='/translate-helpers'>Translation helpers</a>

      </div>



      <div className="flex flex-col gap-3 w-sm items-start">
        <h2>Contentful Examples</h2>
          <a className='underline font-bold ms-5' href='/contentful'>Pull from contentful example </a>
          <a className='underline font-bold ms-5' href='/upload-to-contentful'>Push to contentful example </a>
      </div>
    </div>
  );
}
