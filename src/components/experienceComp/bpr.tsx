import gambar2 from "@/app/assets/faviconbpr.ico"
import Image from 'next/image';

export default function bpr() {
  return(
    <>
    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:gap-6 p-8">
      <Image className="rotate-x-50 rotate-z-45 hover:rotate-z-0 hover:rotate-x-0 transition-transform w-12 h-12 lg:w-20 lg:h-20 my-4 lg:mb-0" alt="Master Media" src={gambar2} />
        <div>
          <h1 className="text-lg lg:text-2xl font-semibold text-zinc-400">BPR Cahaya Fajar</h1>
          <p className="text-sm lg:text-xl text-zinc-500">
          During mine apprenticeship at BPR Cahaya Fajar, I didst craft a form of petition for noble patrons, wrought with Vue and Tailwind. Likewise, I didst forge the company's databases with Laravel 11, weaving structure and order with steadfast hand.            
          </p>
        </div>
      </div>
    </>
  )
}