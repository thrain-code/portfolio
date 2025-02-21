import { IconType } from "react-icons";

interface TitleProps {
  title: string;
  subtitle: string;
  Icon: IconType; 
}

export default function Title({ title, subtitle, Icon }: TitleProps) {
  return (
    <>
      <div className="border-b border-zinc-800" />
      <div className="w-full px-8 lg:px-20">
        <div className="flex justify-between bg-zinc-950 border-x border-x-zinc-800 px-2">
          <p className="text-zinc-700 text-xs lg:text-lg font-light">text-zinc-400 text-xl font-semibold tracking-tighter text-balance</p>
          <p className="text-zinc-700 text-xs lg:text-lg font-light">{subtitle}</p>
        </div>
      </div>
      <div className="border-b border-zinc-800 w-full" />
      <div className="w-full">
        <div className="flex justify-between bg-zinc-950 px-8 lg:px-20">
          <p className="lg:text-4xl text-zinc-400 text-xl font-semibold my-1 lg:my-4 text-left tracking-tighter flex items-center text-balance">
            {title}
          </p>
          <p className="flex items-center text-zinc-400 text-xl lg:text-4xl">
            <Icon />
          </p>
        </div>
      </div>
    </>
  );
}
