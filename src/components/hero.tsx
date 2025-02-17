import Image from "next/image";
import profileImage from "@/app/assets/favicon.ico";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center">
      <div className="border-b border-zinc-600 w-full" />

      <div className="flex flex-col md:flex-row justify-between md:px-8 lg:px-20 gap-8 md:gap-12">
        {/* Foto Profil - Mobile di atas */}
        <div className="order-1 md:order-none flex justify-center md:block md:flex-shrink-0 relative group pt-4 md:pt-10 lg:py-10">
          <div className="relative">
            <Image
              src={profileImage}
              alt="Foto Profil"
              width={288}
              height={288}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 border-2 border-zinc-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Garis Pembatas */}
        <div className="hidden md:block w-px h-full bg-zinc-600" />

        {/* Deskripsi - Mobile di bawah */}
        <div className="order-2 md:order-none flex-1 px-4 sm:px-6 md:px-0 lg:px-2 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold lg:my-4 md:mb-6">
            Arkadani Fathir Fahrezi
          </h1>
          <p className="text-sm sm:text-base my-4 md:mb-6 md:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto md:mx-0">
            Saya adalah seorang pengembang perangkat lunak dengan keahlian di Vue.js, Nuxt.js, 
            dan backend dengan Laravel serta Spring Boot. Saya menyukai tantangan dalam membangun 
            aplikasi yang futuristik dan interaktif.
          </p>
        </div>
      </div>

      <div className="border-b border-zinc-600 w-full" />
    </section>
  );
}

export default Hero;