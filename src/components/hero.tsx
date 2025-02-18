import Image from "next/image";
import profileImage from "@/app/assets/dune.jpeg";

function Hero() {
  return (
    <>
      <section className="h-screen w-full px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row-reverse justify-center lg:justify-between h-full items-center pt-10 lg:pt-0 bg-zinc-950 border-x-zinc-800 border-x-1">
          <div className="w-full lg:w-auto px-4 lg:px-0 flex justify-center lg:justify-end">
            <div className=" w-full lg:w-64 lg:h-64 mx-4">
              <p className="text-md text-zinc-700">bangsat i need a job</p>
              <p className="text-lg text-zinc-500">unemployed person</p>
              <div className="border-4 border-zinc-900 rounded-xl">
                <div className="flex items-center space-x-1 bg-zinc-950 p-2 rounded-t-lg">
                  <span className="h-3 w-3 bg-zinc-900 rounded-full"></span>
                  <span className="h-3 w-3 bg-zinc-900 rounded-full"></span>
                  <span className="h-3 w-3 bg-zinc-900 rounded-full"></span>
                </div>
                <Image src={profileImage} alt="Profile Image" className=" p-1 rounded-b-lg"/>
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
            <p className="lg:text-2xl font-medium text-sm lg:p-4 p-2 text-zinc-600 text-left">
              A seasoned web developer, well-versed in 
              <a href="" className="text-zinc-400 cursor-pointer hover:text-emerald-500"> Nuxt 3</a>,
              <a href="" className="text-zinc-400 cursor-pointer hover:text-green-500"> Vue.js</a>, 
              <a href="" className="text-zinc-400 cursor-pointer hover:text-red-500"> Laravel with Inertia</a>, and 
              <a href="" className="text-zinc-400 cursor-pointer hover:text-cyan-500"> Tailwind CSS</a>, 
              possessing profound mastery of the backend arts through 
              <a href="" className="text-zinc-400 cursor-pointer hover:text-yellow-500"> Spring Boot</a> and 
              <a href="" className="text-zinc-400 cursor-pointer hover:text-indigo-500"> MySQL</a>. 
              He doth favor efficiency, a vision of futurity, and solutions most pristine and unburdened by needless complexity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
