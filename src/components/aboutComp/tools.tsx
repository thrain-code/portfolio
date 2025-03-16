import Title from "../titleComp/title";
import { FaTools } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";

import vueLogo from "@/app/assets/logo_fm/faviconVuue.ico";
import nuxtLogo from "@/app/assets/logo_fm/faviconNuxt.ico";
import laravelLogo from "@/app/assets/logo_fm/faviconLaravel.ico";
import inertiaLogo from "@/app/assets/logo_fm/faviconInertia.ico";
import mysqlLogo from "@/app/assets/logo_fm/faviconMysql.png";
import nextLogo from "@/app/assets/logo_fm/faviconNext.ico";
import tailwindLogo from "@/app/assets/logo_fm/faviconTailwind.ico";
import axiosLogo from "@/app/assets/logo_fm/faviconAxios.ico";
import vercelLogo from "@/app/assets/logo_fm/favicon.ico";
import reactLogo from "@/app/assets/logo_fm/react.svg";

const tools = [
  { name: "Vue.js", img: vueLogo, url: "https://vuejs.org/" },
  { name: "Nuxt 3", img: nuxtLogo, url: "https://nuxt.com/" },
  { name: "Laravel", img: laravelLogo, url: "https://laravel.com/" },
  { name: "Inertia.js", img: inertiaLogo, url: "https://inertiajs.com/" },
  { name: "MySQL", img: mysqlLogo, url: "https://www.mysql.com/" },
  { name: "Next.js", img: nextLogo, url: "https://nextjs.org/" },
  { name: "React.js", img: reactLogo, url: "https://react.dev/" },
  { name: "Tailwind CSS", img: tailwindLogo, url: "https://tailwindcss.com/" },
  { name: "Axios", img: axiosLogo, url: "https://axios-http.com/" },
  { name: "Vercel", img: vercelLogo, url: "https://vercel.com/" },
];

export default function Tools() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <Title title="Technologies" subtitle="Technologies Components" Icon={FaTools} />
      <div className="border-b border-zinc-800 w-full" />
      <div className="h-auto lg:h-auto px-8 lg:px-20">
        <div className="flex flex-col h-full bg-zinc-950 border-x border-x-zinc-800">
          <div className="p-3 text-xl font-semibold text-zinc-400">
            <h1>Technologies that I use and might get changed soon</h1>
          </div>
          <div className="border-b border-zinc-800 w-full" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-6">
            {tools.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center space-x-3 p-8 bg-zinc-900 hover:bg-zinc-800 transition-colors duration-200 ${isMobile ? "grayscale-0" : "grayscale-100 hover:grayscale-0"}`}
              >
                <Image src={tool.img} alt={tool.name} className="w-10 h-10" />
                <span className="text-zinc-300 font-medium">{tool.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
