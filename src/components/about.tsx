"use client";

import { useState } from "react";
import Title from "@/components/titleComp/title";
import { FaUser, FaRoad, FaBrain } from "react-icons/fa";
import Tools from "@/components/aboutComp/tools"
import AboutBox from "@/components/aboutComp/aboutBox";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineItem {
  step: number;
  description: string;
}

const Timeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
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
        <div 
          key={index} 
          className="flex flex-col transition-all duration-300 hover:bg-zinc-900/30 rounded-md p-2"
        >
          <div className="flex px-3 items-start">
            <span className="text-xl font-semibold bg-zinc-800/50 rounded-full w-8 h-8 flex items-center justify-center text-zinc-300">
              {item.step}
            </span>
            <p className="text-zinc-600 px-3 pb-3 text-sm lg:text-lg font-light text-justify">
              {item.description}
            </p>
          </div>
          <div className="border-b border-zinc-800 w-full mt-1" />
        </div>
      ))}
    </div>
  );
};

type TabType = "journey" | "mindset";

const AboutStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("journey");

  const handleTabChange = (tab: TabType): void => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex w-full justify-center space-x-1 border-b border-zinc-800 mb-4 sticky top-0 bg-zinc-950 z-10">
        <button
          className={`group flex items-center gap-2 px-5 py-3 transition-all duration-300 relative ${
            activeTab === "journey"
              ? "text-white font-medium"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
          onClick={() => handleTabChange("journey")}
        >
          <FaRoad className={`text-sm ${
            activeTab === "journey" ? "text-zinc-300" : "text-zinc-500 group-hover:text-zinc-300"
          } transition-all`} />
          My Journey
          {activeTab === "journey" && (
            <motion.span 
              layoutId="activeTab"
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-500 to-zinc-400 rounded-t-md"
            ></motion.span>
          )}
        </button>
        <button
          className={`group flex items-center gap-2 px-5 py-3 transition-all duration-300 relative ${
            activeTab === "mindset"
              ? "text-white font-medium"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
          onClick={() => handleTabChange("mindset")}
        >
          <FaBrain className={`text-sm ${
            activeTab === "mindset" ? "text-zinc-300" : "text-zinc-500 group-hover:text-zinc-300"
          } transition-all`} />
          My Mindset
          {activeTab === "mindset" && (
            <motion.span 
              layoutId="activeTab"
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-500 to-zinc-400 rounded-t-md"
            ></motion.span>
          )}
        </button>
      </div>

      <div className="text-zinc-300 lg:text-lg text-sm relative overflow-hidden flex-1">
        <AnimatePresence mode="wait">
          {activeTab === "journey" && (
            <motion.div 
              key="journey"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900 pr-2 h-full"
              style={{ maxHeight: 'calc(70vh - 120px)' }}
            >
              <Timeline />
            </motion.div>
          )}
        
          {activeTab === "mindset" && (
            <motion.div 
              key="mindset"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900 pr-2 h-full"
              style={{ maxHeight: 'calc(70vh - 120px)' }}
            >
              <div className="space-y-3">
                <div className="px-3 pb-3 flex items-center">
                  <h1 className="text-xl font-semibold">Always never satisfied with your work to push you forward...</h1>
                </div>
                <div className="border-b border-zinc-800 w-full" />
                <p className="text-zinc-600 px-3 pb-3 text-sm lg:text-lg text-justify">
                  As a developer, I have never believed in talent. Talent is just
                  luck granted to those who don&apos;t even have to try. Meanwhile, I
                  have to struggle, sacrifice my time, energy, and mind just to
                  reach the same point as them. I hate seeing people who can easily
                  master something without having to go through a long and painful
                  process. I hate seeing them sitting comfortably while I have to
                  fight through every line of code, every error that crushes my
                  mental state, and every failure that feels like a hard blow to the
                  head. But that hatred is not a weakness—it is fuel. I let it drive
                  me, burn me from within, and force me to move forward. If I don&apos;t
                  have talent, then I will replace it with unmatched hard work. If I
                  don&apos;t have a natural advantage, then I will carve it out with
                  blood and sweat. I will learn, try, fail, and rise again until I
                  can stand at the top and look down—at those who only rely on luck
                  without effort. I will not accept defeat, and I will not let those
                  who are lazy and complacent surpass me. If the world is unfair,
                  then I will force justice with my own hands.
                </p>
                
                <div className="border-t border-zinc-800 w-full mt-4 pt-4" />
                <div className="px-3 pb-3 flex items-center">
                  <h1 className="text-xl font-semibold">Embracing challenges and continuous growth...</h1>
                </div>
                <div className="border-b border-zinc-800 w-full" />
                <p className="text-zinc-600 px-3 pb-3 text-sm lg:text-lg text-justify">
                  Every error message is a lesson, every bug is an opportunity to learn, and every failed project is a stepping stone toward mastery. What separates true developers from the rest is not how easily they grasp concepts, but how persistently they pursue solutions when faced with obstacles. I&apos;ve come to realize that the path to excellence is paved with countless hours of debugging, researching, and refactoring. The more I struggle with a problem, the deeper my understanding becomes when I finally solve it. This mindset has transformed my approach to coding—I no longer fear complexity but welcome it as a chance to expand my capabilities. The journey of a developer is not about reaching a destination but about continuously evolving and adapting to new challenges.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const AboutComp: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title title="About Me" subtitle="About Components" Icon={FaUser} />
      <div className="border-b border-zinc-800 w-full" />
      <div className="h-auto lg:h-[70vh] px-8 lg:px-20">
        <div className="flex flex-col-reverse lg:flex-row h-full bg-zinc-950 border-x border-x-zinc-800 items-center gap-5 lg:gap-0">
          <div className="h-full w-full flex py-4">
            <AboutStory />
          </div>
          <div className="h-px lg:h-full bg-zinc-800 w-full lg:w-px lg:my-0 hidden lg:block" />
          <AboutBox/>
        </div>
      </div>
      <Tools/>
    </motion.div>
  );
};

export default AboutComp;