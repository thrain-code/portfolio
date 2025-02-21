"use client";
import Title from "@/components/titleComp/title"
import { FaGraduationCap } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import gambarMasterMedia from "@/app/assets/faviconmastermedia.ico";
import gambarBpr from "@/app/assets/faviconbpr.ico";

interface ExperienceCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

function ExperienceCard({ image, title, description }: ExperienceCardProps) {
  return (
    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:gap-6 p-3">
      <Image
        className="rotate-x-50 rotate-z-45 hover:rotate-z-0 hover:rotate-x-0 transition-transform w-12 h-12 lg:w-20 lg:h-20 my-4 lg:mb-0"
        alt={title}
        src={image}
      />
      <div>
        <h1 className="text-lg lg:text-2xl font-semibold text-zinc-400">{title}</h1>
        <p className="text-sm lg:text-xl text-zinc-500">{description}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <Title title="Internship Experience" subtitle="Experience Components" Icon={FaGraduationCap} />
      <div className="border-b border-zinc-800 w-full" />
      <div className="h-auto lg:h-[50vh] px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row h-full bg-zinc-950 border-x border-x-zinc-800 px-2 overflow-x-auto lg:overflow-visible items-center gap-5 lg:gap-7">
          <ExperienceCard
            image={gambarMasterMedia}
            title="Master Media"
            description="During my internship at Master Media Cirebon, I mastered the art of assembling custom PCs, active panels, and videotrons. I toiled in warehouse loading, crafted laptops and AIO monitors, and ensured flawless monitor performance—all with skill and unwavering diligence."
          />
          <div className="h-px lg:h-full bg-zinc-800 w-full lg:w-px lg:my-0" />
          <ExperienceCard
            image={gambarBpr}
            title="BPR Cahaya Fajar"
            description="During mine apprenticeship at BPR Cahaya Fajar, I didst craft a form of petition for noble patrons, wrought with Vue and Tailwind. Likewise, I didst forge the company&apos;s databases with Laravel 11, weaving structure and order with steadfast hand."
          />
        </div>
      </div>
    </>
  );
}
