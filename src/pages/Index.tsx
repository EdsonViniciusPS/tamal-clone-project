import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("section-fade");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;