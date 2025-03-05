import Title from "./titleComp/title";
import { FaProjectDiagram } from "react-icons/fa";
import ProjectGrid from "../components/projectComp/projectGrid";
import project1 from "@/app/assets/batman.jpeg"

export default function Project() {
  const projects = [
    {
      title: "Project 1",
      description: "This is a brief description of project 1.",
      image: project1,
      link: "#"
    },
    {
      title: "Project 2",
      description: "This is a brief description of project 2.",
      image: project1,
      link: "#"
    },
    {
      title: "Project 3",
      description: "This is a brief description of project 3.",
      image: project1,
      link: "#"
    }
  ];

  return (
    <>
      <Title subtitle="Project Components" title="Project" Icon={FaProjectDiagram} />
      <div className="border-b border-zinc-800 w-full" />
      <div className="h-auto px-8 lg:px-20">
        <div className="flex flex-col h-full bg-zinc-950 border-x border-x-zinc-800">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </>
  );
}