import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "../constants";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src={projects[currentSlide].image}
            alt="Modern architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
        </div>
      </div>

      {/* Content Container */}
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-full">
          {/* Main Heading */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-semibold text-neutral-800 mb-4 opacity-0 animate-fade-in">
              Building things
              <span className="block">is our mission.</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Feature Projects Slider */}
      <div className="absolute bottom-4 right-0 sm:-right-8 bg-accent-blue text-white w-full sm:w-96 min-h-44 overflow-visible">
        <div className="p-4 sm:p-8 text-center">
          <h2 className="text-base font-bold mb-4">Feature Projects</h2>
          <h3 className="text-lg sm:text-xl font-normal max-w-xs mx-auto transition-all duration-300">
            {projects[currentSlide].title}
          </h3>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute left-0 sm:-left-8 right-0 sm:right-8 bottom-0 flex justify-center items-center bg-neutral-800">
          <button
            onClick={prevSlide}
            className="flex-1 flex items-center justify-center text-base font-normal space-x-2 hover:bg-neutral-900 px-2 sm:px-4 py-2 rounded transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <button
            onClick={nextSlide}
            className="flex-1 flex items-center justify-center text-base font-normal space-x-2 hover:bg-neutral-900 px-2 sm:px-4 py-2 rounded transition-colors duration-200"
          >
            <span>Next</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
