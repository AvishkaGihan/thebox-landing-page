import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { categories, projects } from "../constants";

const ProjectsGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  // Filter and paginate projects
  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.category === activeFilter
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const displayedProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
      {/* Header with Mobile Menu Button */}
      <div className="flex items-center justify-between mb-8 lg:mb-12">
        <h1 className="text-neutral-800 text-3xl font-bold">Projects</h1>

        <button
          className="lg:hidden p-2 hover:bg-neutral-100 rounded transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="lg:flex lg:gap-12">
        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-neutral-100 rounded transition-colors mb-4"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => {
                      setActiveFilter(category);
                      setCurrentPage(1);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`relative w-full text-left px-4 py-2 text-xl transition-colors duration-200 ${
                      activeFilter === category
                        ? "text-primary font-bold"
                        : "font-medium text-neutral-400 hover:text-primary"
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
          </div>
        </nav>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block w-72 flex-shrink-0">
          <ul className="space-y-3 sticky top-8">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => {
                    setActiveFilter(category);
                    setCurrentPage(1);
                  }}
                  className={`relative w-full text-left px-4 py-2 text-xl transition-colors duration-200 ${
                    activeFilter === category
                      ? "text-primary font-bold"
                      : "font-medium text-neutral-400 hover:text-primary"
                  }`}
                >
                  {activeFilter === category && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary transform transition-transform duration-200 ease-out scale-y-100" />
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
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm text-white p-4">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p className="text-base font-normal mt-1">
                    {project.address}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-between gap-6 items-center mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="group flex items-center justify-center flex-1 py-3 px-4 gap-2
                bg-neutral-800 text-white text-base font-normal 
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-200 hover:bg-neutral-700"
              >
                <ArrowLeft className="transition-transform duration-200 group-hover:-translate-x-2" />
                Back
              </button>

              <div className="flex justify-center items-center space-x-3 flex-1">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-200 
                    ${
                      currentPage === index + 1
                        ? "bg-primary scale-110"
                        : "bg-neutral-200 hover:bg-neutral-300"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="group flex items-center justify-center flex-1 py-3 px-4 gap-2
                bg-neutral-800 text-white text-base font-normal 
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-200 hover:bg-neutral-700"
              >
                Next
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-2" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </section>
  );
};

export default ProjectsGallery;
