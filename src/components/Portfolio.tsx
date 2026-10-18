import React, { useState } from "react";
import { ProjectItem } from "../data/portfolioData";
import { ProjectModal } from "./ProjectModal";
import { ArrowUpRight } from "lucide-react";

interface PortfolioProps {
  projects: ProjectItem[];
}

export const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = [
    "Todos",
    "Monitoreo Ambiental",
    "Gestión SSOMA",
    "Seguridad y Salud Ocupacional",
    "Supervisión de Riesgos",
    "Herramientas & SIG"
  ];

  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#003446] border-t border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[#00D4C6] text-xs font-bold tracking-widest uppercase block mb-2">
            EXPERIENCIA & CASOS PRÁCTICOS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Proyectos y Experiencia
          </h2>
          <div className="w-12 h-1 bg-[#00D4C6] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-xs md:text-sm text-white/70 leading-relaxed font-normal">
            Hitos operativos en minería, agroindustria, telecomunicaciones y consultoría ambiental.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#00D4C6] text-[#002D3C] shadow-sm shadow-[#00D4C6]/20"
                  : "bg-[#002D3C] text-white/70 hover:text-white hover:bg-[#003B4F] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-xl overflow-hidden bg-[#06475A] border border-white/10 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[#00D4C6]/40"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`Ver detalles de ${project.title}`}
            >
              {/* Image with 4/3 Aspect Ratio */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#003B4F]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Petroleum Hover Overlay */}
                <div className="absolute inset-0 bg-[#003241]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10 backdrop-blur-[2px]">
                  <div className="flex justify-end">
                    <span className="w-9 h-9 rounded-full bg-[#00D4C6] text-[#002D3C] flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-md">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <div>
                    <span className="text-[#00D4C6] text-xs font-bold uppercase tracking-wider block mb-1">
                      {project.category} · {project.year}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Clean bottom strip */}
              <div className="p-4 bg-[#002B38] border-t border-white/5 flex items-center justify-between">
                <div className="truncate mr-2">
                  <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-[#00D4C6] transition-colors truncate">
                    {project.title}
                  </h4>
                  <span className="text-[#00D4C6] text-[11px] font-medium block truncate">
                    {project.client || project.category}
                  </span>
                </div>
                <span className="text-white/40 text-xs font-mono shrink-0">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
