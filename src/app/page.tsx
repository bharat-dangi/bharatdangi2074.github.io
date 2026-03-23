import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Qualification from "@/components/sections/Qualification";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import ProjectCTA from "@/components/sections/ProjectCTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0 md:pt-18">
        <Hero />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <ProjectCTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
