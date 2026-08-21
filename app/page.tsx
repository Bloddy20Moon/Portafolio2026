import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";
import About from "@/components/sections/About";
import OpenSource from "@/components/sections/OpenSource";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-1 pb-section-gap">
        <Hero />
        <Projects />
        <Stack />
        <About />
        <OpenSource />
        <Testimonials />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}
