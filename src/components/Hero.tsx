import React from "react";
import { ArrowDown, ShieldCheck, MapPin, Award, CheckCircle2 } from "lucide-react";

interface HeroProps {
  name: string;
  greeting: string;
  intro: string;
}

export const Hero: React.FC<HeroProps> = ({ name, greeting, intro }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-28 pb-20 px-6 md:px-12 select-none"
      style={{
        background:
          "radial-gradient(ellipse at 50% 25%, #004D63 0%, #003B4F 45%, #002B3A 75%, #001E28 100%)"
      }}
    >
      {/* Cinematic Ambient Glow Accents (rich combination maintaining petroleum blue) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#00D4C6]/12 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-12 left-10 w-[420px] h-[420px] bg-[#005B73]/25 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#028090]/15 rounded-full blur-[120px] pointer-events-none -z-0" />

      {/* Subtle Technical Grid Lines Background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#00D4C6 1px, transparent 1px), linear-gradient(90deg, #00D4C6 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Centered Main Content Container */}
      <div className="max-w-3xl w-full mx-auto text-center flex flex-col items-center justify-center z-10 relative">
        {/* Professional Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06475A]/80 border border-[#00D4C6]/30 text-[#00D4C6] text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-md">
          <ShieldCheck size={14} className="text-[#00D4C6]" />
          <span>Ingeniería Ambiental y Sanitaria · SSOMA</span>
        </div>

        {/* Greeting & Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white/90 tracking-tight leading-tight mb-3">
          {greeting}
        </h2>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight flex items-center justify-center flex-wrap gap-x-3 gap-y-1">
          <span>Soy {name}</span>
          <span
            className="inline-block w-[3px] sm:w-[4px] h-[34px] sm:h-[50px] bg-[#00D4C6] cursor-blink align-middle shrink-0"
            aria-hidden="true"
          />
        </h1>

        {/* Focus Subtitle */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#00D4C6] font-medium tracking-wide">
          Especialista en Seguridad, Salud Ocupacional (SST) & Monitoreo Ambiental
        </p>

        {/* Centered Description */}
        <p className="mt-5 text-sm sm:text-[15px] md:text-base text-white/85 leading-relaxed max-w-2xl font-normal">
          {intro}
        </p>

        {/* Call to Actions */}
        <div className="mt-9 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#00D4C6] text-[#002D3C] font-bold text-xs sm:text-[13px] tracking-wider rounded-full uppercase transition-all duration-200 hover:bg-white hover:text-[#003B4F] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-lg shadow-[#00D4C6]/20"
            aria-label="Ver proyectos y experiencia"
          >
            VER PROYECTOS
          </a>
          <a
            href="#resume"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/80 text-white font-bold text-xs sm:text-[13px] tracking-wider rounded-full uppercase transition-all duration-200 hover:bg-white hover:text-[#003B4F] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-sm backdrop-blur-sm"
            aria-label="Ver trayectoria y currículum"
          >
            VER TRAYECTORIA
          </a>
        </div>

        {/* Key Pillars Highlights Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[#00D4C6] font-bold text-lg sm:text-xl block font-mono">UNICA</span>
            <span className="text-[11px] text-white/60 block mt-0.5">Bachiller Ing. Ambiental</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[#00D4C6] font-bold text-lg sm:text-xl block font-mono">SSOMA</span>
            <span className="text-[11px] text-white/60 block mt-0.5">Ley 29783 & IPERC</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[#00D4C6] font-bold text-lg sm:text-xl block font-mono">ArcGIS</span>
            <span className="text-[11px] text-white/60 block mt-0.5">Mapas & AutoCAD 2D</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[#00D4C6] font-bold text-lg sm:text-xl block font-mono">SIGERSOL</span>
            <span className="text-[11px] text-white/60 block mt-0.5">Gestión de Residuos</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#00D4C6] transition-colors flex flex-col items-center gap-1.5 text-xs"
        aria-label="Desplazarse hacia abajo"
      >
        <span className="text-[10px] uppercase tracking-widest">Conocer más</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
};
