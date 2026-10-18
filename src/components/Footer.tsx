import React from "react";
import { Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre Mí", href: "#about" },
    { label: "Competencias", href: "#competencias" },
    { label: "Proyectos", href: "#portfolio" },
    { label: "Trayectoria", href: "#resume" },
    { label: "Contacto", href: "#contact" }
  ];

  return (
    <footer className="bg-[#002532] border-t border-white/10 py-12 text-white/80">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-extrabold text-white tracking-tight">
              Daniel
            </span>
            <p className="text-xs text-white/50 mt-1">
              Ingeniería Ambiental y Sanitaria · Especialista SSOMA
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center text-xs font-semibold">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#00D4C6] transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Action */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/daniel-jaime-uribe/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#003B4F] border border-white/10 flex items-center justify-center text-white/80 hover:text-[#00D4C6] hover:border-[#00D4C6]/40 transition-colors"
              aria-label="Perfil de LinkedIn de Daniel Jaime Uribe"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:daniel.juribe14@gmail.com"
              className="w-9 h-9 rounded-full bg-[#003B4F] border border-white/10 flex items-center justify-center text-white/80 hover:text-[#00D4C6] hover:border-[#00D4C6]/40 transition-colors"
              aria-label="Enviar correo a Daniel Jaime"
            >
              <Mail size={16} />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#06475A] border border-white/10 flex items-center justify-center text-white hover:bg-[#00D4C6] hover:text-[#002D3C] transition-colors ml-2 cursor-pointer"
              aria-label="Volver arriba"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Daniel Marcelo Jaime Uribe. Todos los derechos reservados.</p>
          <p className="font-mono text-[11px] text-[#00D4C6]/80">Ica, Perú · Monitoreo Ambiental & SSOMA</p>
        </div>
      </div>
    </footer>
  );
};
