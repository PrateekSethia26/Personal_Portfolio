import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        {/* Hero Content */}
        <div className="lg:col-span-3 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-lg lg:text-xl text-green font-mono">
              Hi there, my name is
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span>Prateek Sethia</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl text-slate dark:text-slate-light leading-relaxed">
              I'm a full-stack software engineer specializing in building
              exceptional digital experiences. Currently, I'm focused on
              building accessible, human-centered products.
              <span className="inline-block animate-wave ml-2">👋</span>
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="primary-btn flex items-center">
                View My Work <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:col-span-2 rounded-lg overflow-hidden animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
            alt="Prateek"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
