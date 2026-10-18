import React, { useEffect } from "react";
import { ProjectItem } from "../data/portfolioData";
import { X, Calendar, Tag, Building2, Layers } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#002D3C] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#002532]">
          <div className="flex items-center gap-2">
            <span className="text-[#00D4C6] text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-white/40">·</span>
            <span className="text-white/60 text-xs font-mono">{project.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4C6]"
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Showcase Image */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-[#003B4F]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002D3C]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Title & Summary */}
          <div>
            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-[#00D4C6] font-medium">
              {project.summary}
            </p>
          </div>

          {/* Description */}
          <div className="text-sm text-white/80 leading-relaxed font-normal space-y-3">
            <p>{project.description}</p>
          </div>

          {/* Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#002532] border border-white/5 text-xs">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#00D4C6]" />
              <div>
                <span className="text-white/40 block">Periodo</span>
                <span className="text-white font-medium">{project.year}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Tag className="w-4 h-4 text-[#00D4C6]" />
              <div>
                <span className="text-white/40 block">Área / Disciplina</span>
                <span className="text-white font-medium">{project.category}</span>
              </div>
            </div>
            {project.client && (
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[#00D4C6]" />
                <div>
                  <span className="text-white/40 block">Empresa / Cliente</span>
                  <span className="text-white font-medium">{project.client}</span>
                </div>
              </div>
            )}
          </div>

          {/* Technologies & Tools */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/60 font-bold mb-2.5 flex items-center gap-1.5">
              <Layers size={13} className="text-[#00D4C6]" />
              <span>Competencias & Herramientas Aplicadas</span>
            </h4>
            <div className="flex flex-wrap gap-2 text-xs text-white/90">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#06475A] border border-white/10 rounded-md font-mono text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#002532] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            Cerrar Ficha
          </button>
        </div>
      </div>
    </div>
  );
};
