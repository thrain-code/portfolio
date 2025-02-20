import { FaGraduationCap } from "react-icons/fa";
import M2 from "@/components/experienceComp/m2";
import Bpr from "@/components/experienceComp/bpr";

export default function experience() {
  return (
    <>
      <div className="border-b border-zinc-800" />
      <div className="w-full px-8 lg:px-20">
        <div className="flex justify-between bg-zinc-950 border-x border-x-zinc-800 px-2">
          <p className="text-zinc-700 text-xs lg:text-lg font-light">anjay</p>
          <p className="text-zinc-700 text-xs lg:text-lg font-light">Experience Components</p>
        </div>
      </div>
      <div className="border-b border-zinc-800 w-full" />
      <div className="w-full">
        <div className="flex justify-between bg-zinc-950 px-8 lg:px-20">
          <p className="lg:text-4xl text-zinc-400 text-xl font-semibold my-1 lg:my-4 text-left tracking-tighter flex items-center text-balance">
            Internship Experience
          </p>
          <p className="flex items-center text-zinc-400 text-xl lg:text-4xl">
            <FaGraduationCap />
          </p>
        </div>
      </div>
      <div className="border-b border-zinc-800 w-full" />
      {/* Mobile Responsive */}
      <div className="h-auto lg:h-[50vh] px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row h-full bg-zinc-950 border-x border-x-zinc-800 px-2 overflow-x-auto lg:overflow-visible items-center gap-5 lg:gap-7">
          <M2 />
          <div className="h-px lg:h-full bg-zinc-800 w-full lg:w-px my-4 lg:my-0" />
          <Bpr />
        </div>
      </div>
    </>
  );
}
