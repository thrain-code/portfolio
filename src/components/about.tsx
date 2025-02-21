"use client"

import { useState } from "react";
import Title from "@/components/titleComp/title";
import { FaUser } from "react-icons/fa";

function AboutStory() {
  const [activeTab, setActiveTab] = useState("journey");

  return (
    <div className="w-full">
      <div className="flex w-full justify-center space-x-4 border-b border-zinc-800 mb-4">
        <button
          className={`px-4 py-2 ${
            activeTab === "journey"
              ? "border-b-2 border-zinc-500 text-white"
              : "text-zinc-400"
          }`}
          onClick={() => setActiveTab("journey")}
        >
          My Journey
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "mindset"
              ? "border-b-2 border-zinc-500 text-white"
              : "text-zinc-400"
          }`}
          onClick={() => setActiveTab("mindset")}
        >
          My Mindset
        </button>
      </div>

      {/* Tab Content */}
      <div className="text-zinc-300 lg:text-lg text-sm px-4">
        {activeTab === "journey" && (
          <p>
            I became interested in coding when I was in vocational high school, majoring in Software Engineering (RPL). There, I learned the basics of programming and became more curious about how software is built. After graduating, I continued my journey by joining the JWP training program, which gave me a deeper insight into the tech industry. After that, I had the opportunity to intern at an IT company. That was where I first learned to use frameworks, and my first experience was with Vue and Laravel. Since then, I have become more passionate and continued learning, exploring various other frameworks, as you may already know.
          </p>
        )}
        {activeTab === "mindset" && (
          <p>
            As a developer, I have never believed in talent. Talent is just luck granted to those who don’t even have to try. Meanwhile, I have to struggle, sacrifice my time, energy, and mind just to reach the same point as them. I hate seeing people who can easily master something without having to go through a long and painful process. I hate seeing them sitting comfortably while I have to fight through every line of code, every error that crushes my mental state, and every failure that feels like a hard blow to the head. But that hatred is not a weakness—it is fuel. I let it drive me, burn me from within, and force me to move forward. If I don’t have talent, then I will replace it with unmatched hard work. If I don’t have a natural advantage, then I will carve it out with blood and sweat. I will learn, try, fail, and rise again until I can stand at the top and look down—at those who only rely on luck without effort. I will not accept defeat, and I will not let those who are lazy and complacent surpass me. If the world is unfair, then I will force justice with my own hands.
          </p>
        )}
      </div>
    </div>
  );
}

export default function aboutComp() {
  return (
    <>
      <Title title="About Me" subtitle="About Components" Icon={FaUser} />
      <div className="border-b border-zinc-800 w-full" />
      <div className="h-auto lg:h-[70vh] px-8 lg:px-20">
        <div className="flex flex-col-reverse lg:flex-row h-full bg-zinc-950 border-x border-x-zinc-800 items-center gap-5 lg:gap-0">
          <div className="h-full w-full flex">
            <AboutStory />
          </div>
          <div className="h-px lg:h-full bg-zinc-800 w-full lg:w-px lg:my-0 hidden lg:block" />
          <div className="h-full w-full items-center flex flex-col justify-center">

            <div className="lg:flex-col flex mx-4 z-40 rotate-x-50 rotate-z-45 py-5">
              <div className="border-1 bg-zinc-950 p-1 w-32 h-32 lg:w-92 lg:h-96 border-zinc-400 rounded-xl">
                <div className="flex items-center lg:space-x-2 space-x-1 px-1 lg:py-2 py-1 rounded-t-lg">
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                </div>
                <div className="border-1 space-y-2 lg:h-84 h-25 rounded-lg border-zinc-400 p-3">
                  <div className="flex gap-3">
                    <FaUser className="h-6" />
                    <div className="border rounded-xl w-full border-zinc-400"/>
                  </div>
                  <div className="border-1 flex border-zinc-400 h-70 rounded-xl">
                    <div className="border-l-1 border-zinc-400 h-full ml-13"/>
                    <div className="flex flex-col">
                      <textarea className="border border-zinc-400 m-3 resize-y max-h-64 w-full rounded-xl" placeholder="type here"/>
                      <button className="">bangsat</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:flex-col flex mx-4 z-30 absolute lg:mt-12 mt-5 rotate-x-50 rotate-z-45">
              <div className="border-1 p-1 w-32 h-32 lg:w-92 lg:h-96 border-zinc-400 rounded-xl shadow-2xl shadow-zinc-500">
                <div className="flex items-center space-x-1 px-1 py-2 rounded-t-lg">
                  <span className="lg:h-5 lg:w-5 h-0.5 w-0.5 border-1 border-zinc-400 rounded-full"></span>
                  <span className="lg:h-5 lg:w-5 h-0.5 w-0.5 border-1 border-zinc-400 rounded-full"></span>
                  <span className="lg:h-5 lg:w-5 h-0.5 w-0.5 border-1 border-zinc-400 rounded-full"></span>
                </div>
                <div className="border-1 lg:h-84 h-25 rounded-lg border-zinc-400 p-3">
                  <FaUser className="h-full w-full text-zinc-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
