/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { portfolioData } from "./data/portfolioData";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "competencias", "portfolio", "resume", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          {
            rootMargin: "-25% 0px -55% 0px",
            threshold: 0
          }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#003B4F] text-white flex flex-col font-['Poppins',sans-serif] selection:bg-[#00D4C6] selection:text-[#002D3C]">
      {/* Sticky Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          name={portfolioData.name}
          greeting={portfolioData.greeting}
          intro={portfolioData.heroIntro}
        />

        {/* Section 2: About Me */}
        <About data={portfolioData.about} />

        {/* Section 3: Services (with dedicated contextual images) */}
        <Services services={portfolioData.services} />

        {/* Section 4: Portfolio / Projects */}
        <Portfolio projects={portfolioData.projects} />

        {/* Section 5: Resume, Experience, Education & Certifications */}
        <Resume
          experience={portfolioData.experience}
          education={portfolioData.education}
          certifications={portfolioData.certifications}
          skills={portfolioData.skills}
        />

        {/* Section 6: Contact Form */}
        <Contact contact={portfolioData.contact} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
