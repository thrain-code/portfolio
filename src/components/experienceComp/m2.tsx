"use client"

import gambar2 from "@/app/assets/faviconmastermedia.ico"
import Image from 'next/image';

export default function m2() {
  return(
    <>
    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:gap-6 p-8">
      <Image className="rotate-x-50 rotate-z-45 hover:rotate-z-0 hover:rotate-x-0 transition-transform w-12 h-12 lg:w-20 lg:h-20 my-4 lg:mb-0" alt="Master Media" src={gambar2} />
        <div>
          <h1 className="text-lg lg:text-2xl font-semibold text-zinc-400">Master Media</h1>
          <p className="text-sm lg:text-xl text-zinc-500">
            During my internship at Master Media Cirebon, I mastered the art of assembling custom PCs, active panels, and videotrons. I toiled in warehouse loading, crafted laptops and AIO monitors, and ensured flawless monitor performance—all with skill and unwavering diligence.
          </p>
        </div>
      </div>
    </>
  )
}