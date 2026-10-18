export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  summary: string;
  description: string;
  technologies: string[];
  link?: string;
  client?: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  highlights?: string[];
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  hours?: string;
}

export interface PortfolioData {
  name: string;
  brand: string;
  role: string;
  greeting: string;
  heroIntro: string;
  about: {
    badge: string;
    heading: string;
    subheading: string;
    biography: string;
    details: {
      name: string;
      profession: string;
      degree: string;
      email: string;
      phone: string;
      experience: string;
      location: string;
      availability: string;
      linkedin: string;
    };
  };
  services: ServiceItem[];
  projects: ProjectItem[];
  experience: TimelineItem[];
  education: TimelineItem[];
  certifications: CertificationItem[];
  skills: SkillItem[];
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
    socials: {
      linkedin: string;
      email: string;
    };
  };
}

export const portfolioData: PortfolioData = {
  name: "Daniel Marcelo Jaime Uribe",
  brand: "Daniel",
  role: "Ingeniero Ambiental y Sanitario · Especialista SSOMA",
  greeting: "¡Hola!",
  heroIntro: "Bachiller en Ingeniería Ambiental y Sanitaria con experiencia en Seguridad y Salud en el Trabajo (SST), supervisión SSOMA y monitoreo ambiental. Comprometido con la cultura preventiva, el bienestar del personal y la mejora continua.",
  about: {
    badge: "PERFIL PROFESIONAL",
    heading: "Sobre Mí",
    subheading: "Bachiller en Ingeniería Ambiental y Sanitaria · Especialista en SSOMA",
    biography: "Cuento con sólida experiencia en el área de seguridad y salud en el trabajo (SST) y monitoreo ambiental en sectores industrial, minero, telecomunicaciones y agroindustrial. Poseo amplios conocimientos en identificación de peligros, evaluación de riesgos (IPERC), permisos de trabajo de alto riesgo (PETAR, ATS) y cumplimiento de programas anuales de SSOMA. Mi enfoque combina rigor técnico, liderazgo en campo con charlas de seguridad y dominio de herramientas de modelado y análisis como ArcGIS, AutoCAD y Excel Avanzado.",
    details: {
      name: "Daniel Marcelo Jaime Uribe",
      profession: "Ingeniería Ambiental y Sanitaria",
      degree: "Bachiller (Univ. San Luis Gonzaga)",
      email: "daniel.juribe14@gmail.com",
      phone: "+51 998 653 740",
      experience: "Multi-sectorial (Minería, Agro, Telecom)",
      location: "Ica, Perú",
      availability: "Disponible para nuevos retos",
      linkedin: "https://www.linkedin.com/in/daniel-jaime-uribe/"
    }
  },
  services: [
    {
      id: "monitoreo-ambiental",
      number: "01",
      title: "Monitoreo Ambiental y Ocupacional",
      description: "Ejecución técnica y supervisión de monitoreos de calidad de aire, ruido ambiental y ocupacional, agua y efluentes. Coordinación y cadena de custodia con laboratorios acreditados.",
      iconName: "Activity",
      image: "/src/assets/images/monitoreo_suelo_ingeniero.jpg"
    },
    {
      id: "gestion-ssoma",
      number: "02",
      title: "Sistemas de Gestión SSOMA",
      description: "Implementación, seguimiento y auditoría de programas anuales de Seguridad, Salud en el Trabajo y Medio Ambiente bajo normativas vigentes (Ley N° 29783 y estándares sectoriales).",
      iconName: "ShieldCheck",
      image: "/src/assets/images/service_ssoma.jpg"
    },
    {
      id: "trabajos-alto-riesgo",
      number: "03",
      title: "Permisos Críticos (IPERC, PETAR, ATS)",
      description: "Identificación de peligros y evaluación de riesgos en campo. Verificación, fiscalización y liberación de permisos de trabajos seguros de alto riesgo antes de iniciar actividades.",
      iconName: "AlertTriangle",
      image: "/src/assets/images/service_riesgos.jpg"
    },
    {
      id: "capacitacion-charlas",
      number: "04",
      title: "Capacitaciones y Cultura Preventiva",
      description: "Impartición de charlas de inducción y charlas de 5 minutos, sensibilización del personal operativo en el uso correcto de EPP y cumplimiento estricto de protocolos de bioseguridad.",
      iconName: "Users",
      image: "/src/assets/images/service_capacitacion.jpg"
    },
    {
      id: "sig-ambiental",
      number: "05",
      title: "SIG y Planos Ambientales (ArcGIS & AutoCAD)",
      description: "Generación de cartografía técnica, mapas temáticos ambientales, zonificación geoespacial y planos de instalaciones y rutas de evacuación en 2D.",
      iconName: "Map",
      image: "/src/assets/images/service_sig.jpg"
    },
    {
      id: "gestion-residuos",
      number: "06",
      title: "Gestión Integral de Residuos (SIGERSOL)",
      description: "Diseño y administración de planes de minimización y manejo de residuos sólidos municipales y no municipales. Reportabilidad y cumplimiento en plataforma SIGERSOL.",
      iconName: "Recycle",
      image: "/src/assets/images/service_residuos.jpg"
    }
  ],
  projects: [
    {
      id: "sopermin-monitoreo",
      title: "Ejecución de Monitoreos Ambientales y Ocupacionales",
      category: "Monitoreo Ambiental",
      year: "2025 - 2026",
      image: "/src/assets/images/monitoreo_aire_instalacion.jpg",
      summary: "Medición de parámetros ambientales, toma de muestras y reportes técnicos para SOPERMIN S.A.C.",
      description: "Apoyo operativo en la preparación de equipos de medición (sonómetros, muestreadores de aire, multiparámetros), toma rigurosa de muestras en campo, coordinación logística con laboratorios de ensayo y elaboración de informes técnicos de cumplimiento ambiental.",
      technologies: ["Monitoreo Físico-Químico", "Calidad de Aire", "Ruido Ocupacional", "Informes Técnicos"],
      client: "SOPERMIN S.A.C."
    },
    {
      id: "covemine-ssoma",
      title: "Supervisión SSOMA en Planta de Procesos Antakori",
      category: "Gestión SSOMA",
      year: "2025",
      image: "/src/assets/images/service_ssoma.jpg",
      summary: "Gestión de seguridad, control de EPP e inspecciones anuales en COVEMINE S.C.R.L.",
      description: "Desempeñado como Asistente SSOMA: dictado de charlas de 5 minutos previas al inicio de faenas, control riguroso de entrega y uso de EPP, ejecución de inspecciones programadas de seguridad y supervisión del cumplimiento normativo en faenas de procesamiento.",
      technologies: ["Programa Anual SSOMA", "Control de EPP", "Inspecciones de Seguridad", "Charlas de 5 Minutos"],
      client: "COVEMINE S.C.R.L. (Planta Antakori)"
    },
    {
      id: "pedregal-sso",
      title: "Programa de Seguridad y Salud en Operaciones Agroindustriales",
      category: "Seguridad y Salud Ocupacional",
      year: "2025",
      image: "/src/assets/images/about_workspace.jpg",
      summary: "Auxiliar de SSO en faenas y cámaras en EL PEDREGAL S.A.",
      description: "Capacitaciones diarias al personal de campo, inspecciones periódicas según programa anual de SSO, fiscalización de normas de bioseguridad y prevención de riesgos laborales en entornos de packing y campo agrícola.",
      technologies: ["Plan Anual SSO", "Inspecciones Preventivas", "Capacitaciones", "Agroindustria"],
      client: "EL PEDREGAL S.A."
    },
    {
      id: "percal-supervision",
      title: "Supervisión de Trabajos de Alto Riesgo e IPERC",
      category: "Supervisión de Riesgos",
      year: "2024",
      image: "/src/assets/images/service_riesgos.jpg",
      summary: "Supervisor SSOMA para obras de infraestructura y redes en PERCAL PERÚ E.I.R.L.",
      description: "Liderazgo en la identificación de peligros y evaluación de riesgos en campo (IPERC). Verificación de formatos de permisos de trabajo seguro (ATS, PETAR) para trabajos en altura y espacios confinados, asegurando disponibilidad de EPP y cumplimiento normativo.",
      technologies: ["PETAR", "ATS", "Matriz IPERC", "Supervisión en Campo"],
      client: "PERCAL PERÚ E.I.R.L."
    },
    {
      id: "sigersol-residuos",
      title: "Plan de Manejo y Registro de Residuos Sólidos (SIGERSOL)",
      category: "Gestión Ambiental",
      year: "2023 - 2024",
      image: "/src/assets/images/service_residuos.jpg",
      summary: "Especialización y reporte de residuos sólidos municipales y no municipales con 3SQ Perú.",
      description: "Estructuración de planes de segregación en la fuente, trazabilidad de residuos peligrosos y no peligrosos, y reporte formal de manifiestos y declaraciones juradas a través del Sistema de Información de Gestión de Residuos Sólidos (SIGERSOL).",
      technologies: ["SIGERSOL", "Residuos Peligrosos", "Economía Circular", "Reportabilidad"],
      client: "Consultoría 3SQ Perú S.A.C."
    },
    {
      id: "arcgis-cartografia",
      title: "Elaboración de Cartografía Temática y Planos con ArcGIS & AutoCAD",
      category: "Herramientas & SIG",
      year: "2022 - 2026",
      image: "/src/assets/images/service_sig.jpg",
      summary: "Edición espacial de mapas temáticos ambientales, georreferenciación y planos técnicos.",
      description: "Generación de modelos de elevación, zonificación ambiental, hidrografía, ubicación de puntos de monitoreo georreferenciados y planos de seguridad en AutoCAD 2D y ArcGIS con rigurosidad cartográfica.",
      technologies: ["ArcGIS", "AutoCAD 2D", "Georreferenciación", "Mapas Temáticos"],
      client: "Proyectos Técnicos & Consultorías"
    }
  ],
  experience: [
    {
      id: "exp-sopermin",
      period: "2025 - Presente",
      title: "Monitorista Ambiental",
      organization: "SOPERMIN S.A.C. · Ica / Operaciones",
      description: "Ejecución de monitoreos ambientales y ocupacionales en campo. Elaboración técnica de informes de monitoreo, preparación y calibración de instrumentos, y coordinación logística de toma y envío de muestras a laboratorios acreditados.",
      highlights: [
        "Monitoreos ambientales y ocupacionales (ruido, calidad de aire, agua)",
        "Elaboración de informes de cumplimiento técnico",
        "Coordinación y cadena de custodia con laboratorios certificados"
      ]
    },
    {
      id: "exp-covemine",
      period: "Junio 2025 – Septiembre 2025",
      title: "Asistente de Seguridad, Salud Ocupacional y Medio Ambiente (SSOMA)",
      organization: "COVEMINE S.C.R.L. · Planta Antakori (Nazca, Ica)",
      description: "Gestión de la documentación del sistema SSOMA, dictado de charlas de 5 minutos previas al inicio de jornada, control de entrega y uso de EPP, e inspecciones de seguridad según el programa anual.",
      highlights: [
        "Inspecciones según programa anual de SSOMA",
        "Control y fiscalización de uso de Equipos de Protección Personal (EPP)",
        "Charlas de 5 minutos y sensibilización preventiva"
      ]
    },
    {
      id: "exp-pedregal",
      period: "Febrero 2025 – Mayo 2025",
      title: "Auxiliar de Seguridad y Salud Ocupacional",
      organization: "EL PEDREGAL S.A. · Ica, Perú",
      description: "Verificación del cumplimiento de normas de SSO en faenas agroindustriales y cámaras de frío, dictado de charlas preventivas y apoyo en la ejecución del Plan Anual de Seguridad y Salud Ocupacional.",
      highlights: [
        "Ejecución del Plan Anual de SSO",
        "Inspecciones de condiciones y actos subestándar en planta",
        "Capacitación continua a colaboradores operativos"
      ]
    },
    {
      id: "exp-percal",
      period: "Septiembre 2024 – Diciembre 2024",
      title: "Supervisor de Seguridad y Salud en el Trabajo (SSOMA)",
      organization: "PERCAL PERÚ E.I.R.L. · Ica, Perú",
      description: "Supervisión de actividades operativas en telecomunicaciones e infraestructura. Identificación y evaluación de peligros y riesgos (IPERC), verificación de llenado de permisos de trabajo seguro (ATS, PETAR) e inspecciones programadas.",
      highlights: [
        "Validación y liberación de permisos críticos (ATS y PETAR)",
        "Evaluación de riesgos y matriz IPERC en labores de campo",
        "Control y entrega de EPP específicos para trabajos en altura"
      ]
    },
    {
      id: "exp-energytel",
      period: "Octubre 2022 – Marzo 2023",
      title: "Auxiliar de Seguridad y Salud en el Trabajo",
      organization: "MH ENERGYTEL E.I.R.L. · Lima / Ica",
      description: "Control de entrega de EPP, inspecciones de seguridad en campo (instalaciones eléctricas, drywall, comunicaciones) y verificación de documentación requerida para la autorización de ingreso del personal a obra.",
      highlights: [
        "Homologación de documentación para ingreso a obra",
        "Supervisión del cumplimiento del Plan de SST",
        "Inspecciones de campo en instalaciones de riesgo"
      ]
    },
    {
      id: "exp-medanos",
      period: "Agosto 2019 – Septiembre 2019",
      title: "Inspector de Control de Calidad",
      organization: "AGRÍCOLA LOS MÉDANOS · Ica, Perú",
      description: "Vigilancia de Buenas Prácticas de Manufactura (BPM) e higiene en planta agroexportadora, inspecciones en áreas de proceso y cámaras, y registro analítico de muestreos a materia prima.",
      highlights: [
        "Vigilancia de Buenas Prácticas de Manufactura (BPM)",
        "Muestreos analíticos y control de calidad de materia prima"
      ]
    }
  ],
  education: [
    {
      id: "edu-unica",
      period: "2017 - 2022 (Diploma conferido 2023)",
      title: "Bachiller en Ingeniería Ambiental y Sanitaria",
      organization: "Universidad Nacional San Luis Gonzaga de Ica",
      description: "Formación académica integral en gestión y monitoreo ambiental, ingeniería sanitaria, tratamiento de aguas, gestión de residuos sólidos, evaluación de impacto ambiental (EIA) y seguridad ocupacional."
    }
  ],
  certifications: [
    {
      id: "cert-monitoreo-2026",
      title: "Curso Especializado en Monitoreo de la Calidad Ambiental",
      institution: "Instituto de la Calidad Ambiental",
      year: "2026",
      hours: "90 horas lectivas"
    },
    {
      id: "cert-supervisor-2024",
      title: "Especialización como Supervisor de Seguridad y Salud en el Trabajo",
      institution: "EcoAmbiental Group",
      year: "2024",
      hours: "120 horas académicas"
    },
    {
      id: "cert-cip-2023",
      title: "Semana de la Seguridad y Salud en el Trabajo",
      institution: "Colegio de Ingenieros del Perú C.D. Ica (Capítulo de Minas y Metalurgia)",
      year: "2023",
      hours: "40 horas académicas"
    },
    {
      id: "cert-sigersol-2023",
      title: "Sistema de Información de Gestión de Residuos Sólidos (SIGERSOL) Municipal y No Municipal",
      institution: "Consultora Ingenieros 3SQ Perú S.A.C.",
      year: "2023",
      hours: "24 horas académicas"
    },
    {
      id: "cert-calgesa-2022",
      title: "Supervisor de Seguridad y Salud en el Trabajo",
      institution: "Calgesa Asesoría y Capacitación",
      year: "2022"
    },
    {
      id: "cert-arcgis-2022",
      title: "ArcGIS: Edición y Mapas Temáticos",
      institution: "Systematic / IBEC Learning",
      year: "2022"
    },
    {
      id: "cert-excel-2022",
      title: "Microsoft Excel - Avanzado",
      institution: "Systematic / IBEC Learning",
      year: "2022"
    },
    {
      id: "cert-autocad-2022",
      title: "AutoCAD 2D - Intermedio / Avanzado",
      institution: "Systematic / IBEC Learning",
      year: "2022"
    }
  ],
  skills: [
    { name: "Seguridad y Salud en el Trabajo (SSOMA / Ley 29783)", percentage: 96 },
    { name: "Monitoreo de Calidad Ambiental (Agua, Aire, Ruido)", percentage: 95 },
    { name: "Gestión de Riesgos (Matriz IPERC, PETAR, ATS)", percentage: 94 },
    { name: "Microsoft Excel (Avanzado & Análisis de Datos)", percentage: 92 },
    { name: "ArcGIS (Edición Geoespacial y Mapas Temáticos)", percentage: 90 },
    { name: "Gestión de Residuos Sólidos (SIGERSOL)", percentage: 88 },
    { name: "AutoCAD 2D (Planos Técnicos y Zonificación)", percentage: 85 },
    { name: "Power BI & Herramientas Ofimáticas", percentage: 80 }
  ],
  contact: {
    title: "Contacto",
    subtitle: "¿Buscas un especialista en SSOMA o Monitoreo Ambiental para tus proyectos? Hablemos directamente.",
    email: "daniel.juribe14@gmail.com",
    phone: "+51 998 653 740",
    location: "Ica, Perú (Disponibilidad para desplazamientos a obra/operaciones)",
    socials: {
      linkedin: "https://www.linkedin.com/in/daniel-jaime-uribe/",
      email: "mailto:daniel.juribe14@gmail.com"
    }
  }
};
