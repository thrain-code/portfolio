import Hero from "@/components/hero"
import Footer from "@/components/footer"
import Experience from "@/components/experience";

export default function Home() {
  return (
    <>
    <div className="h-full text-white">
      <Hero/>
      <Experience/>
      <Footer/>
    </div>
    </>
  );
}