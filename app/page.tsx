import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-3 bg-zinc-50 font-sans dark:bg-black">
      <a className='underline font-bold' href='/contentful'>Pull from contentful example </a>
      <a className='underline font-bold' href='/upload-to-contentful'>Push to contentful example </a>
      <a className='underline font-bold' href='/translate-sync'>Synchronous useTranslate example</a>
      <a className='underline font-bold' href='/translate-async'>Asynchronous getTranslate example</a>
    </div>
  );
}
