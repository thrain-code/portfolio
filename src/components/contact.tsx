import Title from "@/components/titleComp/title"
import { FaEnvelopeOpenText } from "react-icons/fa"

export default function contactComp() {
  return(
    <>
    <Title title="Contact" subtitle="Contact Components" Icon={ FaEnvelopeOpenText } />
        <div className="border-b border-zinc-800 w-full" />
        <div className="h-auto lg:h-auto px-8 lg:px-20">
          <div className="flex flex-col h-full bg-zinc-950 border-x border-x-zinc-800">
            
          </div>
         </div>   
    </>
  )
}