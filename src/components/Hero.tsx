import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden">
          <img
            src="https://avatars.githubusercontent.com/u/placeholder"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-secondary mb-8">
          Full Stack Developer & UI/UX Enthusiast
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
        >
          View My Work
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;