import Title from "./titleComp/title"
import { FaProjectDiagram } from "react-icons/fa"

export default function project() {
  return(
    <>
    <Title subtitle="Project Components" title="Project" Icon={FaProjectDiagram} />
    <div className="border-b border-zinc-800 w-full" />
    <div className="h-auto lg:h-[70vh] px-8 lg:px-20">
      <div className="flex flex-col h-full bg-zinc-950 border-x border-x-zinc-800">
        DEV
      </div>
    </div>  
    </>
  )
}