import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre Mí", href: "#about" },
    { label: "Competencias", href: "#competencias" },
    { label: "Proyectos", href: "#portfolio" },
    { label: "Trayectoria", href: "#resume" },
    { label: "Contacto", href: "#contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#002D3C]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3.5"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="text-2xl md:text-[28px] font-extrabold tracking-tight text-white hover:text-[#00D4C6] transition-colors duration-200 select-none whitespace-nowrap"
          aria-label="Daniel Inicio"
        >
          Daniel
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] font-semibold">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`transition-colors duration-200 whitespace-nowrap py-1 ${
                  isActive
                    ? "text-[#00D4C6]"
                    : "text-white/90 hover:text-[#00D4C6]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#00D4C6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4C6] transition-colors"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#002532] border-b border-white/10 px-6 py-6 transition-all duration-200 shadow-xl">
          <nav className="flex flex-col gap-4 text-sm font-semibold">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`py-2 px-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-[#00D4C6] bg-[#003B4F]"
                      : "text-white/90 hover:text-[#00D4C6] hover:bg-[#003446]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
