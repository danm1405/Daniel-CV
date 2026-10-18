import React from "react";
import { ServiceItem } from "../data/portfolioData";
import { Activity, ShieldCheck, AlertTriangle, Users, Map, Recycle, Wind, Layers } from "lucide-react";

interface ServicesProps {
  services: ServiceItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5 text-[#00D4C6]" />,
  Wind: <Wind className="w-5 h-5 text-[#00D4C6]" />,
  Layers: <Layers className="w-5 h-5 text-[#00D4C6]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#00D4C6]" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5 text-[#00D4C6]" />,
  Users: <Users className="w-5 h-5 text-[#00D4C6]" />,
  Map: <Map className="w-5 h-5 text-[#00D4C6]" />,
  Recycle: <Recycle className="w-5 h-5 text-[#00D4C6]" />
};

export const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section id="competencias" className="py-24 md:py-32 bg-[#003B4F] relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[#00D4C6] text-xs font-bold tracking-widest uppercase block mb-2">
            ÁREAS DE ESPECIALIZACIÓN & COMPETENCIAS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Competencias
          </h2>
          <div className="w-12 h-1 bg-[#00D4C6] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-xs md:text-sm text-white/70 leading-relaxed font-normal">
            Habilidades técnicas y experiencia en campo en seguridad y salud ocupacional (SSOMA), monitoreo ambiental y cumplimiento normativo integral.
          </p>
        </div>

        {/* 6-Card Grid with Contextual Real Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#06475A] border border-white/[0.08] rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#00D4C6]/50 flex flex-col justify-between group"
            >
              <div>
                {/* Contextual Service Photography */}
                <div className="relative h-44 w-full overflow-hidden bg-[#002D3C]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Seamless Petroleum Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06475A] via-[#06475A]/50 to-transparent pointer-events-none" />

                  {/* Number Badge & Floating Icon */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-[#002D3C]/90 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-md transition-colors group-hover:border-[#00D4C6]/40">
                    {iconMap[service.iconName] || <ShieldCheck className="w-5 h-5 text-[#00D4C6]" />}
                  </div>

                  <span className="absolute top-3 right-4 text-xl font-extrabold text-white/80 font-mono drop-shadow-md">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 pt-3">
                  <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-[#00D4C6] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-[13px] text-white/75 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 pb-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#00D4C6]">
                <span className="text-white/40 text-[11px] font-mono">Normativa & Campo</span>
                <span className="group-hover:translate-x-1 transition-transform">Ver competencia →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
