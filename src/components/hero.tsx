"use client";

import Image from "next/image";
import profileImage from "@/app/assets/dune.jpeg";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/thrain-traitor",
    icon: (
      <FaGithub className="text-white w-8 h-8 transition-colors duration-300 group-hover:text-[#6e5494]" />
    ),
    name: "GitHub",
  },
  {
    href: "https://www.instagram.com/dev_bythrain/",
    icon: (
      <FaInstagram className="text-white w-8 h-8 transition-colors duration-300 group-hover:text-[#E1306C]" />
    ),
    name: "Instagram",
  },
  {
    href: "mailto:thrainrodent@gmail.com",
    icon: (
      <FaEnvelope className="text-white w-8 h-8 transition-colors duration-300 group-hover:text-[#EA4335]" />
    ),
    name: "Email",
  },
];

function Hero() {
  return (
    <>
      <section className="lg:h-[70vh] h-auto w-full px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row-reverse justify-center lg:justify-between h-full items-center pt-10 lg:pt-0 bg-zinc-950 border-x-zinc-800 border-x-1">
          <div className="w-full lg:w-auto pr-4 lg:px-0 flex-col lg:justify-end">
            <div className="px-4">
              <p className="text-sm lg:text-md ml-20 text-zinc-600">
                please i need a job
              </p>
              <p className="lg:text-lg text-sm text-zinc-400">
                unemployed person
              </p>
            </div>
            <div className="w-full lg:flex-col flex lg:w-64 lg:h-64 mx-4">
              <div className="border-zinc-400 border rounded-xl">
                <div className="flex items-center space-x-1 p-2 rounded-t-lg">
                  <span className="h-3 w-3 bg-red-500 rounded-full" />
                  <span className="h-3 w-3 bg-yellow-500 rounded-full" />
                  <span className="h-3 w-3 bg-green-500 rounded-full" />
                </div>
                <Image
                  src={profileImage}
                  alt="Profile Image"
                  className="p-1 rounded-b-xl"
                />
              </div>
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
          <div className="flex-col flex w-full lg:w-auto py-3 lg:py-0">
            <div className="border-b-1 border-b-zinc-800 w-full" />
            <div className="flex justify-between">
              <p className="text-zinc-700 text-xs lg:text-lg font-light mx-2">
                text-5xl px-2 font-semibold tracking-tighter text-balance
              </p>
              <p className="text-zinc-700 text-xs lg:text-lg font-light mx-2">
                Hero Components
              </p>
            </div>
            <div className="border-b-1 border-b-zinc-800 w-full" />
            <h1 className="lg:text-9xl text-white text-5xl px-2 font-semibold my-1 lg:my-4 text-left tracking-tighter text-balance">
              Arkadani Fathir Fahrezi...
            </h1>
            <div className="border-b-1 border-b-zinc-800 w-full" />
            <p className="lg:text-2xl font-medium text-sm lg:p-4 p-2 text-zinc-600 text-left">
              A passionate web developer with experience in modern technologies
              such as
              <a
                href="https://nuxt.com/"
                className="text-zinc-400 cursor-pointer hover:text-emerald-500"
              >
                {" "}
                Nuxt 3
              </a>
              ,
              <a
                href="https://vuejs.org/"
                className="text-zinc-400 cursor-pointer hover:text-green-500"
              >
                {" "}
                Vue.js
              </a>
              ,
              <a
                href="https://laravel.com/"
                className="text-zinc-400 cursor-pointer hover:text-red-500"
              >
                {" "}
                Laravel
              </a>
              , and
              <a
                href="https://tailwindcss.com/"
                className="text-zinc-400 cursor-pointer hover:text-cyan-500"
              >
                {" "}
                Tailwind CSS
              </a>
              . Experienced in building scalable applications, optimizing
              performance, and creating clean, maintainable code. With a keen
              eye for design and functionality, I strive to deliver seamless
              user experiences while continuously exploring new technologies and
              innovations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
