import React, { useState } from "react";
import { PortfolioData } from "../data/portfolioData";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Linkedin } from "lucide-react";

interface ContactProps {
  contact: PortfolioData["contact"];
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ contact }) => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Por favor ingrese un correo electrónico válido.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe contener al menos 10 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend sending latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setErrors({});

      // Reset success banner after 6 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#003B4F] relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[#00D4C6] text-xs font-bold tracking-widest uppercase block mb-2">
            COMUNICACIÓN DIRECTA
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Contacto
          </h2>
          <div className="w-12 h-1 bg-[#00D4C6] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-xs md:text-sm text-white/70 leading-relaxed font-normal">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                Coordinemos para tu Empresa u Operación
              </h3>
              <p className="text-sm text-white/75 leading-relaxed font-normal mb-8">
                Disponible para funciones de supervisión SSOMA, monitorista ambiental, auditorías de seguridad e implementación de planes anuales en obra y planta.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#06475A] border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#00D4C6]" />
                  </div>
                  <div>
                    <span className="text-xs text-white/50 block font-medium">Correo Principal</span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-white hover:text-[#00D4C6] text-sm font-semibold transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#06475A] border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#00D4C6]" />
                  </div>
                  <div>
                    <span className="text-xs text-white/50 block font-medium">Teléfono / WhatsApp</span>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-white hover:text-[#00D4C6] text-sm font-semibold transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#06475A] border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#00D4C6]" />
                  </div>
                  <div>
                    <span className="text-xs text-white/50 block font-medium">Base / Ubicación</span>
                    <span className="text-white text-sm font-semibold">
                      {contact.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#06475A] border border-white/10 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5 text-[#00D4C6]" />
                  </div>
                  <div>
                    <span className="text-xs text-white/50 block font-medium">Red Profesional</span>
                    <a
                      href={contact.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00D4C6] text-sm font-semibold transition-colors inline-flex items-center gap-1"
                    >
                      <span>linkedin.com/in/daniel-jaime-uribe</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10">
              <span className="text-xs text-white/40 block mb-2">Disponibilidad Operativa</span>
              <p className="text-xs text-white/70">
                Disponibilidad para desplazamientos a operaciones mineras, plantas agroindustriales y proyectos de infraestructura.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#06475A]/60 border border-white/10 rounded-2xl p-7 sm:p-9 shadow-xl backdrop-blur-sm">
              {isSuccess && (
                <div
                  role="status"
                  className="mb-6 p-4 rounded-xl bg-[#00D4C6]/15 border border-[#00D4C6]/40 flex items-center gap-3 text-white text-sm animate-in fade-in duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00D4C6] shrink-0" />
                  <div>
                    <span className="font-bold text-white block">¡Mensaje enviado con éxito!</span>
                    <span className="text-xs text-white/80">Gracias por comunicarte. Responderé a tu solicitud a la brevedad.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-white/80 mb-2">
                      Nombre y Apellido <span className="text-[#00D4C6]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej. Ing. Carlos Mendoza"
                      className={`w-full px-4 py-3 bg-transparent border rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00D4C6] transition-colors ${
                        errors.name ? "border-[#E24A68]" : "border-white/25"
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-[#E24A68] flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-white/80 mb-2">
                      Correo Electrónico <span className="text-[#00D4C6]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ej. contacto@empresa.com"
                      className={`w-full px-4 py-3 bg-transparent border rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00D4C6] transition-colors ${
                        errors.email ? "border-[#E24A68]" : "border-white/25"
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-[#E24A68] flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-white/80 mb-2">
                    Asunto o Proyecto
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Ej. Requerimiento de Monitoreo Ambiental / Supervisión SSOMA"
                    className="w-full px-4 py-3 bg-transparent border border-white/25 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00D4C6] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-white/80 mb-2">
                    Mensaje o Consulta <span className="text-[#00D4C6]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describa el alcance de la operación, ubicación y requerimientos..."
                    className={`w-full px-4 py-3 bg-transparent border rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00D4C6] transition-colors resize-none ${
                      errors.message ? "border-[#E24A68]" : "border-white/25"
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-[#E24A68] flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#00D4C6] text-[#002D3C] font-bold text-xs tracking-wider uppercase rounded-full hover:bg-white hover:text-[#003B4F] transition-all duration-200 cursor-pointer shadow-md hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <span>{isSubmitting ? "ENVIANDO MENSAJE..." : "ENVIAR MENSAJE"}</span>
                    <Send size={14} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
