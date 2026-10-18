import React from "react";
import { TimelineItem, SkillItem, CertificationItem } from "../data/portfolioData";
import { Briefcase, GraduationCap, Award, FileCheck, CheckCircle2 } from "lucide-react";

interface ResumeProps {
  experience: TimelineItem[];
  education: TimelineItem[];
  certifications: CertificationItem[];
  skills: SkillItem[];
}

export const Resume: React.FC<ResumeProps> = ({
  experience,
  education,
  certifications,
  skills
}) => {
  return (
    <section id="resume" className="py-24 md:py-32 bg-[#003B4F] relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[#00D4C6] text-xs font-bold tracking-widest uppercase block mb-2">
            EXPERIENCIA & FORMACIÓN
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Trayectoria Profesional
          </h2>
          <div className="w-12 h-1 bg-[#00D4C6] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-xs md:text-sm text-white/70 leading-relaxed font-normal">
            Historial de desempeño laboral en campo y planta, formación universitaria y certificaciones especializadas.
          </p>
        </div>

        {/* 2 Timelines: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 mb-20">
          {/* Experience Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#06475A] border border-[#00D4C6]/30 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#00D4C6]" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Experiencia Laboral
              </h3>
            </div>

            {/* Vertical Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l border-[#00D4C6]/40 space-y-10 ml-4">
              {experience.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#003B4F] border-2 border-[#00D4C6] transition-transform group-hover:scale-125" />

                  <span className="inline-block text-xs font-mono font-semibold text-[#00D4C6] mb-1">
                    {item.period}
                  </span>

                  <h4 className="text-base font-bold text-white tracking-tight">
                    {item.title}
                  </h4>

                  <span className="text-xs text-white/60 block font-medium mb-3">
                    {item.organization}
                  </span>

                  <p className="text-[13px] text-white/75 leading-relaxed font-normal mb-3">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-1.5 text-xs text-white/80">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-[#00D4C6] mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column (5 cols) */}
          <div className="lg:col-span-5 space-y-12">
            {/* Formación Académica */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#06475A] border border-[#00D4C6]/30 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#00D4C6]" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Formación Académica
                </h3>
              </div>

              <div className="relative pl-6 sm:pl-8 border-l border-[#00D4C6]/40 space-y-8 ml-4">
                {education.map((item) => (
                  <div key={item.id} className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#003B4F] border-2 border-[#00D4C6] transition-transform group-hover:scale-125" />

                    <span className="inline-block text-xs font-mono font-semibold text-[#00D4C6] mb-1">
                      {item.period}
                    </span>

                    <h4 className="text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h4>

                    <span className="text-xs text-white/60 block font-medium mb-3">
                      {item.organization}
                    </span>

                    <p className="text-[13px] text-white/75 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificaciones y Especializaciones */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#06475A] border border-[#00D4C6]/30 flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-[#00D4C6]" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Certificaciones Oficiales
                </h3>
              </div>

              <div className="space-y-3.5">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-xl bg-[#06475A]/70 border border-white/5 hover:border-[#00D4C6]/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h5 className="text-xs font-bold text-white leading-snug">
                          {cert.title}
                        </h5>
                        <span className="text-[11px] text-white/60 block mt-1">
                          {cert.institution}
                        </span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-mono text-[#00D4C6] font-semibold block">
                          {cert.year}
                        </span>
                        {cert.hours && (
                          <span className="text-[10px] text-white/40 block mt-0.5">
                            {cert.hours}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills & Softwares Section */}
        <div className="pt-14 border-t border-white/10">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-[#06475A] border border-[#00D4C6]/30 flex items-center justify-center">
              <Award className="w-5 h-5 text-[#00D4C6]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Softwares y Herramientas Técnicas
              </h3>
              <p className="text-xs text-white/60">Dominio de software especializado en ingeniería ambiental, ofimática y gestión de riesgos.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-[#00D4C6] font-mono">{skill.percentage}%</span>
                </div>
                {/* Horizontal Progress Bar */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00D4C6] rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
