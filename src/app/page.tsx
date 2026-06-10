import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gesang from "@/components/Gesang";
import Zeremonie from "@/components/Zeremonie";
import QuoteBand from "@/components/QuoteBand";
import Packages from "@/components/Packages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gesang />
        <Zeremonie />
        <QuoteBand />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
