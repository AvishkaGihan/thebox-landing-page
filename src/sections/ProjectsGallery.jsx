import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { categories, projects } from "../constants";

const ProjectsGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState();

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
      {/* Header with Mobile Menu Button */}
      <div className="flex items-center justify-between mb-8 lg:mb-12">
        <h1 className="text-neutral-800 text-3xl font-bold">Projects</h1>

        <button
          className="lg:hidden p-2 hover:bg-neutral-100 rounded transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="lg:flex lg:gap-12">
        {/* Desktop Navigation */}
        <nav className="hidden lg:block w-72 flex-shrink-0">
          <ul className="space-y-3">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setActiveFilter(category)}
                  className={`relative w-full text-left px-4 py-2  text-xl  transition-colors duration-200 ${
                    activeFilter === category
                      ? "text-primary font-bold"
                      : "font-medium text-neutral-200 hover:text-primary"
                  }`}
                >
                  {activeFilter === category && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary transform transition-transform duration-200 ease-out" />
                  )}
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Projects Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-sm"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 lg:h-72 object-cover transition-transform duration-200 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-primary text-white p-3">
                  <h3 className="text-base font-bold">{project.name}</h3>
                  <p className="text-base font-normal">{project.address}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between gap-6 items-center mt-8">
            <button
              className="group flex items-center justify-center flex-1 py-3 gap-1
             bg-neutral-800 text-white text-base font-normal "
            >
              <span>
                <ArrowLeft className="transition duration-200 group-hover:-translate-x-2" />
              </span>
              Back
            </button>
            <div className="flex justify-center items-center space-x-3 flex-1">
              <span className="w-3.5 h-3.5 rounded-full bg-primary" />
              <span className="w-3.5 h-3.5 rounded-full bg-neutral-50" />
              <span className="w-3.5 h-3.5 rounded-full bg-neutral-50" />
              <span className="w-3.5 h-3.5 rounded-full bg-neutral-50" />
              <span className="w-3.5 h-3.5 rounded-full bg-neutral-50" />
            </div>
            <button
              className="group flex items-center justify-center flex-1 py-3 gap-1
             bg-neutral-800 text-white text-base font-normal "
            >
              Next
              <span>
                <ArrowRight className="transition duration-200 group-hover:translate-x-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
