import Title from "./titleComp/title";
import { FaProjectDiagram } from "react-icons/fa";
import ProjectGrid from "../components/projectComp/projectGrid";
import portfolio from "@/app/assets/portfolio.png";
import port_scanner from "@/app/assets/port_scanner.png"

export default function Project() {
  const projects = [
    {
      title: "Portfolio",
      description: "My portfolio build from stratch",
      image: portfolio,
      link: "https://portfolio-thrain.vercel.app/",
      tags: ["Next", "TypeScript", "Tailwind", "Vercel"],
    },
    {
      title: "Thrain Rush",
      description: "Basic port scanner with few extra feature",
      image: port_scanner,
      link: "https://github.com/thrain-code/port_scan",
      tags: ["Python"],
    },
  ];

  return (
    <>
      <Title
        subtitle="Project Components"
        title="Project"
        Icon={FaProjectDiagram}
      />
      <div className="border-b border-zinc-800 w-full" />
      <div className="h-auto px-8 lg:px-20">
        <div className="flex flex-col h-full bg-zinc-950 border-x border-x-zinc-800">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </>
  );
}
