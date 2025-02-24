"use client";

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Image from "next/image";
import nextLogo from "@/app/assets/logo_fm/faviconNext.ico";
import vercelLogo from "@/app/assets/logo_fm/favicon.ico";
import tailwindLogo from "@/app/assets/logo_fm/faviconTailwind.ico";
import yeahRight from "@/app/assets/image.png";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    if (showImage) {
      const timer = setTimeout(() => setShowImage(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showImage]);

  return (
    <>
      <div className="border-b border-zinc-800" />
      <div className="w-full px-8 lg:px-20">
        <div className="flex justify-between bg-zinc-950 border-x border-x-zinc-800 px-2">
          <p className="text-zinc-700 text-xs lg:text-lg font-light">
            text-xs text-zinc-400
          </p>
          <p className="text-zinc-700 text-xs lg:text-lg font-light">
            Footer Components
          </p>
        </div>
      </div>
      <div className="border-b border-zinc-800 w-full" />
      <footer className="bg-zinc-950 text-white relative overflow-hidden">
        <div className="container flex items-center justify-between mx-auto px-6 py-12">
          <div className="flex items-center gap-2">
            <span>Built with:</span>
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
              <Image src={nextLogo} alt="Next.js" className="w-6 h-6" />
            </a>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              <Image src={vercelLogo} alt="Vercel" className="w-6 h-6" />
            </a>
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
              <Image src={tailwindLogo} alt="Tailwind CSS" className="w-6 h-6" />
            </a>
          </div>
          <button
            className="w-10 h-10 bg-zinc-800 rounded-full cursor-pointer select-none 
             active:translate-y-1 active:[box-shadow:0_0px_0_0_#52525b,0_0px_0_0_#52525b41] 
             active:border-b-0 transition-all duration-150 
             [box-shadow:0_4px_0_0_#52525b,0_7px_0_0_#52525b41] 
             border border-zinc-600 flex items-center justify-center"
            onClick={() => {
              setIsDark(!isDark);
              setShowImage(true);
            }}
          >
            {isDark ? <FaSun className="text-zinc-400 text-sm" /> : <FaMoon className="text-zinc-400 text-sm" />}
          </button>
        </div>

        {/* Animasi muncul gambar dari kiri */}
        <div
          className={`fixed top-1/2 left-0 transform -translate-y-1/2 transition-all duration-500 ${
            showImage ? "translate-x-0 opacity-100 scale-125" : "-translate-x-full opacity-0 scale-90"
          }`}
        >
          <Image src={yeahRight} alt="Yeah Right" className="w-70 h-auto" />
        </div>
      </footer>
      <div className="border-b border-zinc-800" />
      <div className="w-full px-8 lg:px-20 h-12">
        <div className="flex justify-center items-center h-full bg-zinc-950 border-x border-x-zinc-800 px-2">
          <div className="lg:text-lg text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} Dani. All rights reserved.
          </div>
        </div>
      </div>
      <div className="border-b border-zinc-800 w-full" />
    </>
  );
}
