import Image from "next/image";
import profileImage from "@/app/assets/dune.jpeg";

function Hero() {
  return (
    <>
      <section className="h-screen w-full px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row-reverse justify-center lg:justify-between h-full items-center pt-10 lg:pt-0 bg-zinc-950 border-x-zinc-800 border-x-1">
          <div className="w-full lg:w-auto px-4 lg:px-0 flex justify-center lg:justify-end">
            <div className=" w-full lg:w-64 lg:h-64 mx-4">
              <div className="border-4 border-zinc-900 rounded-xl">
                <div className="flex items-center space-x-1 bg-zinc-950 p-2 rounded-t-lg">
                  <span className="h-3 w-3 bg-zinc-900 rounded-full"></span>
                  <span className="h-3 w-3 bg-zinc-900 rounded-full"></span>
                  <span className="h-3 w-3 bg-zinc-900 rounded-full"></span>
                </div>

                <Image src={profileImage} alt="Profile Image" className="rounded-b-lg"/>
                
              </div>
            </div>
          </div>

          <div className="h-px lg:h-full bg-zinc-800 w-full lg:w-px my-4 lg:my-0 hidden lg:block" />

          <div className="flex-col flex w-full lg:w-auto py-8 lg:py-0">
            <div className="border-b-1 border-b-zinc-800 w-full" />
            <h1 className="lg:text-9xl text-5xl px-2 font-semibold my-1 lg:my-4 text-left tracking-tighter text-balance">
              Arkadani Fathir Fahrezi
            </h1>
            <div className="border-b-1 border-b-zinc-800 w-full" />
            <p className="lg:text-3xl text-sm lg:p-4 p-2 text-zinc-600 text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur dolorum quaerat excepturi corporis aperiam ad praesentium, asperiores tenetur quasi sed cupiditate facere nemo delectus veritatis repellendus doloribus animi, maxime quidem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
