import Hero from "@/components/hero"
import Footer from "@/components/footer"
import Contribution from "@/components/contribution";

export default function Home() {
  return (
    <>
    <div className="h-full">
      <Hero/>
      <Contribution/>
      <Footer/>
    </div>
    </>
  );
}