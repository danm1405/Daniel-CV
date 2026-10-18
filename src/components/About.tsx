import React from "react";
import { PortfolioData } from "../data/portfolioData";
import { FileText, ArrowRight, ShieldCheck, Activity, AlertTriangle, HardHat, CheckCircle2 } from "lucide-react";

interface AboutProps {
  data: PortfolioData["about"];
}

export const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-[#003446] to-[#002D3C] border-t border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#00D4C6] text-xs font-bold tracking-widest uppercase inline-block mb-2">
            {data.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {data.heading}
          </h2>
          <div className="w-12 h-1 bg-[#00D4C6] mt-3 mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-white/85 font-medium">
            {data.subheading}
          </p>
        </div>

        {/* Executive Summary Card */}
        <div className="max-w-4xl mx-auto bg-[#06475A]/60 border border-white/10 rounded-2xl p-8 sm:p-10 mb-12 shadow-xl backdrop-blur-sm">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="text-[#00D4C6] shrink-0 w-6 h-6" />
              <span>Compromiso con la Seguridad y la Calidad Ambiental</span>
            </h3>
            <p className="text-sm sm:text-[15px] md:text-base text-white/85 leading-relaxed font-normal">
              Bachiller en Ingeniería Ambiental y Sanitaria por la Universidad Nacional San Luis Gonzaga de Ica. Especialista enfocado en la gestión de Seguridad, Salud Ocupacional (SSOMA) y Monitoreo Ambiental, con experiencia comprobada en faenas de sectores minero, agroindustrial y telecomunicaciones.
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="p-3.5 rounded-xl bg-[#002D3C]/80 border border-white/5 text-center">
              <span className="text-xl sm:text-2xl font-extrabold text-[#00D4C6] font-mono block">UNICA</span>
              <span className="text-[11px] text-white/70 block mt-1 font-medium">Bachiller Ing. Ambiental</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#002D3C]/80 border border-white/5 text-center">
              <span className="text-xl sm:text-2xl font-extrabold text-[#00D4C6] font-mono block">Ley 29783</span>
              <span className="text-[11px] text-white/70 block mt-1 font-medium">Normativa & Planes SST</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#002D3C]/80 border border-white/5 text-center">
              <span className="text-xl sm:text-2xl font-extrabold text-[#00D4C6] font-mono block">IPERC</span>
              <span className="text-[11px] text-white/70 block mt-1 font-medium">PETAR & ATS en Campo</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#002D3C]/80 border border-white/5 text-center">
              <span className="text-xl sm:text-2xl font-extrabold text-[#00D4C6] font-mono block">GIS / CAD</span>
              <span className="text-[11px] text-white/70 block mt-1 font-medium">ArcGIS, AutoCAD & SIGERSOL</span>
            </div>
          </div>
        </div>

        {/* 4 Core Competence Cards - Lo Más Importante Destacado */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-[#002532]/85 border border-white/10 hover:border-[#00D4C6]/40 transition-all duration-300 shadow-lg group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#004D63] text-[#00D4C6] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Activity size={20} />
              </div>
              <h4 className="text-base font-bold text-white tracking-tight group-hover:text-[#00D4C6] transition-colors">
                Monitoreo Ambiental & Ocupacional
              </h4>
            </div>
            <p className="text-xs sm:text-[13px] text-white/75 leading-relaxed font-normal mb-3">
              Muestreo y evaluación de calidad de aire, ruido ambiental y ocupacional, agua y efluentes.
            </p>
            <div className="space-y-1.5 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#00D4C6] shrink-0" />
                <span>Calibración de instrumentos y toma de muestras</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#00D4C6] shrink-0" />
                <span>Cadena de custodia con laboratorios acreditados</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-[#002532]/85 border border-white/10 hover:border-[#00D4C6]/40 transition-all duration-300 shadow-lg group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#004D63] text-[#00D4C6] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <ShieldCheck size={20} />
              </div>
              <h4 className="text-base font-bold text-white tracking-tight group-hover:text-[#00D4C6] transition-colors">
                Gestión Integral SSOMA
              </h4>
            </div>
            <p className="text-xs sm:text-[13px] text-white/75 leading-relaxed font-normal mb-3">
              Implementación, seguimiento y fiscalización de programas anuales de Seguridad y Salud.
            </p>
            <div className="space-y-1.5 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#00D4C6] shrink-0" />
                <span>Cumplimiento normativo estricto bajo Ley N° 29783</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#00D4C6] shrink-0" />
                <span>Auditorías e inspecciones programadas en planta</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-[#002532]/85 border border-white/10 hover:border-[#00D4C6]/40 transition-all duration-300 shadow-lg group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#004D63] text-[#00D4C6] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <AlertTriangle size={20} />
              </div>
              <h4 className="text-base font-bold text-white tracking-tight group-hover:text-[#00D4C6] transition-colors">
                Permisos de Alto Riesgo (PETAR / ATS)
              </h4>
            </div>
            <p className="text-xs sm:text-[13px] text-white/75 leading-relaxed font-normal mb-3">
              Identificación y control de riesgos operacionales críticos antes del inicio de labores.
            </p>
            <div className="space-y-1.5 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#00D4C6] shrink-0" />
                <span>Liberación y validación de permisos PETAR y ATS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#00D4C6] shrink-0" />
                <span>Matriz IPERC adaptada a actividades de campo</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-[#002532]/85 border border-white/10 hover:border-[#00D4C6]/40 transition-all duration-300 shadow-lg group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#004D63] text-[#00D4C6] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <HardHat size={20} />
              </div>
              <h4 className="text-base font-bold text-white tracking-tight group-hover:text-[#00D4C6] transition-colors">
                Cultura Preventiva & Control de EPP
              </h4>
            </div>
            <p className="text-xs sm:text-[13px] text-white/75 leading-relaxed font-normal mb-3">
              Sensibilización constante del personal operativo y supervisión de condiciones de trabajo seguras.
            </p>
            <div className="space-y-1.5 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#00D4C6] shrink-0" />
                <span>Charlas de 5 minutos e inducciones de seguridad</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#00D4C6] shrink-0" />
                <span>Control, entrega y fiscalización de uso de EPP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Centered */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#resume"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#00D4C6] text-[#002D3C] font-bold text-xs tracking-wider rounded-full hover:bg-white hover:text-[#003B4F] transition-all duration-200 shadow-md hover:-translate-y-0.5 uppercase"
          >
            <span>VER TRAYECTORIA Y CERTIFICADOS</span>
            <FileText size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 border border-white/30 text-white font-bold text-xs tracking-wider rounded-full hover:border-white hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5 uppercase"
          >
            <span>IR A CONTACTO</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
