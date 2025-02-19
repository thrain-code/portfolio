"use client"

import Image from "next/image";
import profileImage from "@/app/assets/dune.jpeg";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { 
    href: "https://github.com/thrain-traitor", 
    icon: <FaGithub className="text-white w-8 h-8 transition-colors duration-300 group-hover:text-[#6e5494]" />,
    name: "GitHub"
  },
  { 
    href: "https://instagram.com/yourusername", 
    icon: <FaInstagram className="text-white w-8 h-8 transition-colors duration-300 group-hover:text-[#E1306C]" />,
    name: "Instagram"
  },
  { 
    href: "mailto:your@email.com", 
    icon: <FaEnvelope className="text-white w-8 h-8 transition-colors duration-300 group-hover:text-[#EA4335]" />,
    name: "Email"
  }
];


function Hero() {
  return (
    <>
      <section className="lg:h-[70vh] h-auto w-full px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row-reverse justify-center lg:justify-between h-full items-center pt-10 lg:pt-0 bg-zinc-950 border-x-zinc-800 border-x-1">
          <div className="w-full lg:w-auto pr-4 lg:px-0 flex-col lg:justify-end">
            <div className="px-4">
              <p className="text-sm lg:text-md ml-20 text-zinc-700">
                bangsat i need a job
              </p>
              <p className="lg:text-lg text-sm text-zinc-500">unemployed person</p>
            </div>
            <div className="w-full lg:flex-col flex lg:w-64 lg:h-64 mx-4">
              <div className="border-4 border-zinc-900 rounded-xl">
                <div className="flex items-center space-x-1 bg-zinc-950 p-2 rounded-t-lg">
                  <span className="h-3 w-3 bg-zinc-900 rounded-full"></span>
                  <span className="h-3 w-3 bg-zinc-900 rounded-full"></span>
                  <span className="h-3 w-3 bg-zinc-900 rounded-full"></span>
                </div>
                <Image
                  src={profileImage}
                  alt="Profile Image"
                  className="p-1 rounded-b-lg"
                />
              </div>
              {/* social media link */}
              <div className="lg:py-3 px-3 w-full">
                <div className="rounded-xl h-full w-full lg:w-auto p-3 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 justify-center items-center">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative border border-zinc-700 p-3 rounded-lg hover:border-zinc-600 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-black/50"
                      aria-label={link.name}
                    >
                      {link.icon}
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="h-px lg:h-full bg-zinc-800 w-full lg:w-px my-4 lg:my-0 hidden lg:block" />

          <div className="flex-col flex w-full lg:w-auto py-8 lg:py-0">
            <div className="border-b-1 border-b-zinc-800 w-full" />
            <div className=" flex justify-between">
              <p className="text-zinc-800 text-xs lg:text-lg font-light mx-2">text-5xl px-2 font-semibold tracking-tighter text-balance</p>
              <p className="text-zinc-800 text-xs lg:text-lg font-light mx-2">Hero Components</p>
            </div>
            <div className="border-b-1 border-b-zinc-800 w-full" />
            <h1 className="lg:text-9xl text-5xl px-2 font-semibold my-1 lg:my-4 text-left tracking-tighter text-balance">
              Arkadani Fathir Fahrezi...
            </h1>
            <div className="border-b-1 border-b-zinc-800 w-full" />
            <p className="lg:text-2xl font-medium text-sm lg:p-4 p-2 text-zinc-600 text-left">
              A seasoned web developer, well-versed in
              <a
                href=""
                className="text-zinc-400 cursor-pointer hover:text-emerald-500"
              >
                {" "}
                Nuxt 3
              </a>
              ,
              <a
                href=""
                className="text-zinc-400 cursor-pointer hover:text-green-500"
              >
                {" "}
                Vue.js
              </a>
              ,
              <a
                href=""
                className="text-zinc-400 cursor-pointer hover:text-red-500"
              >
                {" "}
                Laravel with Inertia
              </a>
              , and
              <a
                href=""
                className="text-zinc-400 cursor-pointer hover:text-cyan-500"
              >
                {" "}
                Tailwind CSS
              </a>
              , possessing profound mastery of the backend arts through
              <a
                href=""
                className="text-zinc-400 cursor-pointer hover:text-yellow-500"
              >
                {" "}
                Spring Boot
              </a>{" "}
              and
              <a
                href=""
                className="text-zinc-400 cursor-pointer hover:text-indigo-500"
              >
                {" "}
                MySQL
              </a>
              . He doth favor efficiency, a vision of futurity, and solutions
              most pristine and unburdened by needless complexity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
