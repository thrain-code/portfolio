"use client";

import { useState } from "react";
import Title from "@/components/titleComp/title";
import { FaUser } from "react-icons/fa";
import Tools from "@/components/aboutComp/tools"

const Timeline = () => {
  const timelineData = [
    {
      step: 1,
      description:
        "I became interested in coding when I was in vocational high school, majoring in Software Engineering (RPL). There, I learned the basics of programming and became more curious about how software is built.",
    },
    {
      step: 2,
      description:
        "After graduating, I continued my journey by joining the JWP training program, which gave me a deeper insight into the tech industry.",
    },
    {
      step: 3,
      description:
        "After that, I had the opportunity to intern at an IT company. That was where I first learned to use frameworks, and my first experience was with Vue and Laravel.",
    },
    {
      step: 4,
      description:
        "Since then, I have become more passionate and continued learning, exploring various other frameworks, as you may already know.",
    },
  ];

  return (
    <div className="space-y-2 flex flex-col">
      {timelineData.map((item, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex px-3 text-xl font-semibold">
            {item.step}
            <p className="text-zinc-600 px-3 pb-3 text-sm lg:text-lg font-light text-justify">{item.description}</p>
          </div>
          <div className="border-b border-zinc-800 w-full" />
        </div>
      ))}
    </div>
  );
};

function AboutStory() {
  const [activeTab, setActiveTab] = useState("journey");

  return (
    <div className="w-full">
      <div className="flex w-full justify-center space-x-4 border-b border-zinc-800 mb-4">
        <button
          className={`px-4 py-2 transition-all ${
            activeTab === "journey"
              ? "border-b-2 border-zinc-500 text-white"
              : "text-zinc-400"
          }`}
          onClick={() => setActiveTab("journey")}
        >
          My Journey
        </button>
        <button
          className={`px-4 py-2 transition-all ${
            activeTab === "mindset"
              ? "border-b-2 border-zinc-500 text-white"
              : "text-zinc-400"
          }`}
          onClick={() => setActiveTab("mindset")}
        >
          My Mindset
        </button>
      </div>

      <div className="text-zinc-300 lg:text-lg text-sm">
        {activeTab === "journey" && <Timeline />}
        {activeTab === "mindset" && (
          <div>
            <h1 className="px-3 pb-3 text-xl font-semibold">Always never satisfied with your work to push you forward...</h1>
            <div className="border-b border-zinc-800 w-full" />
            <p className="text-zinc-600 px-3 pb-3 text-sm lg:text-lg text-justify">
              As a developer, I have never believed in talent. Talent is just
              luck granted to those who don’t even have to try. Meanwhile, I
              have to struggle, sacrifice my time, energy, and mind just to
              reach the same point as them. I hate seeing people who can easily
              master something without having to go through a long and painful
              process. I hate seeing them sitting comfortably while I have to
              fight through every line of code, every error that crushes my
              mental state, and every failure that feels like a hard blow to the
              head. But that hatred is not a weakness—it is fuel. I let it drive
              me, burn me from within, and force me to move forward. If I don’t
              have talent, then I will replace it with unmatched hard work. If I
              don’t have a natural advantage, then I will carve it out with
              blood and sweat. I will learn, try, fail, and rise again until I
              can stand at the top and look down—at those who only rely on luck
              without effort. I will not accept defeat, and I will not let those
              who are lazy and complacent surpass me. If the world is unfair,
              then I will force justice with my own hands.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AboutComp() {
  const [isTyping, setIsTyping] = useState(false);

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
            <div
              className={`lg:flex-col flex mx-4 z-40 transition-all py-5 rotate-x-50 rotate-z-45 ${
                isTyping ? "lg:mb-10 mb-7" : ""
              }`}
            >
              <div className="border-1 bg-zinc-950 p-1 w-48 h-48 lg:w-92 lg:h-96 relative border-zinc-400 rounded-xl">
                <div className="flex items-center lg:space-x-2 space-x-1 px-1 lg:py-2 py-1 rounded-t-lg">
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                </div>
                <div className="border-1 space-y-2 lg:h-84 h-41 rounded-lg border-zinc-400 p-3">
                  <div className="flex gap-3">
                    <FaUser className="lg:h-6 h-3" />
                    <div className="border rounded-xl w-full border-zinc-400" />
                  </div>
                  <div className="border-1 flex border-zinc-400 h-28 lg:h-70 rounded-xl">
                    <div className="border-l-1 border-zinc-400 h-full ml-6 lg:ml-13" />
                    <div className="flex flex-col">
                      <textarea
                        className="border border-zinc-400 lg:text-xl text-xs lg:m-3 m-2 h-full w-29 lg:w-63 resize-y rounded-xl text-center flex items-center justify-center p-4 placeholder:text-zinc-500 placeholder:text-sm focus:outline-none"
                        placeholder="type here"
                        onFocus={() => setIsTyping(true)}
                        onBlur={() => setIsTyping(false)}
                      />
                      <button className="border lg:text-xl text-xs font-semibold border-zinc-400 rounded-xl mx-3 mb-3 py-1 text-zinc-300 transition-all duration-300 ease-in-out hover:bg-zinc-400 hover:text-black active:scale-95">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:flex-col flex mx-4 z-30 absolute rotate-x-50 rotate-z-45 shadow-xl shadow-zinc-900 rounded-lg">
              <div className="border-1 bg-zinc-950 p-1 w-48 h-48 lg:w-92 lg:h-96 border-zinc-400 rounded-xl">
                <div className="flex items-center lg:space-x-2 space-x-1 px-1 lg:py-2 py-1 rounded-t-lg">
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                </div>
                <div className="border-1 space-y-2 lg:h-84 h-41 rounded-lg border-zinc-400 p-3">
                  <div className="flex gap-3">
                    <FaUser className="h-6" />
                    <div className="border rounded-xl w-full border-zinc-400" />
                  </div>
                  <div className="border-1 flex border-zinc-400 h-28 lg:h-70 rounded-xl">
                    <div className="border-l-1 border-zinc-400 h-full ml-6 lg:ml-13" />
                    <div className="flex flex-col">
                      <textarea
                        className="border border-zinc-400 lg:text-md text-xs lg:m-3 m-2 h-full w-29 lg:w-63 resize-y rounded-xl text-center flex items-center justify-center p-4 placeholder:text-zinc-500 placeholder:text-sm focus:outline-none"
                        placeholder="type here"
                        onFocus={() => setIsTyping(true)}
                        onBlur={() => setIsTyping(false)}
                      />
                      <button className="border lg:text-md text-xs font-semibold border-zinc-400 rounded-xl mx-3 mb-3 py-1 text-zinc-300 transition-all duration-300 ease-in-out hover:bg-zinc-400 hover:text-black active:scale-95">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tools/>
    </>
  );
}
