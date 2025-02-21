"use client";

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Image from "next/image";
import nextLogo from "@/app/assets/faviconNext.ico";
import vercelLogo from "@/app/assets/favicon.ico";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <div className="border-b border-zinc-800" />
      <div className="w-full px-8 lg:px-20">
        <div className="flex justify-between bg-zinc-950 border-x border-x-zinc-800 px-2">
          <p className="text-zinc-700 text-xs lg:text-lg font-light">text-xs text-zinc-400</p>
          <p className="text-zinc-700 text-xs lg:text-lg font-light">Footer Components</p>
        </div>
      </div>
      <div className="border-b border-zinc-800 w-full" />
      <footer className="bg-zinc-950 text-white">
        <div className="container flex items-center justify-between mx-auto px-6 py-12">
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <Image src={nextLogo} alt="Next.js" className="w-6 h-6" />
            <Image src={vercelLogo} alt="Vercel" className="w-6 h-6" />
          </div>
          <button
            className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
          </button>
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
