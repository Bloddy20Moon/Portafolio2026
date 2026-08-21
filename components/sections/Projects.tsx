"use client";

import { useState } from "react";

// Estructura de TypeScript que define los campos requeridos para cada proyecto.
// Puedes agregar nuevos campos aquí si los necesitas en el futuro.
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  githubUrl: string;
  projectUrl: string;
}

// ==========================================
// CONFIGURACIÓN DE TUS PROYECTOS:
// Para agregar un programa o cambiar su información,
// simplemente modifica, elimina o añade objetos a este array.
// ==========================================
const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Pulse Analytics",
    subtitle: "React • Node • Postgres",
    description: "Un panel de control analítico SaaS que procesa más de 50 millones de eventos mensuales. Incluye gráficos en tiempo real, segmentación personalizada y consultas ultra rápidas con tiempos de respuesta por debajo de los 200 ms.",
    tags: ["REACT", "NODE.JS", "POSTGRESQL", "CLICKHOUSE"],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCz1mFWsZh0pfyHym6fqspjf2pJpnaXLiSsRtN1eeC58ZIlnSRYH_VOrWvxK2t4cq7c8EaLijDpx6dBmktDxYJ3DM7IS6vLfR26rOBgImz3RM0yUw7q4SdK-VTXEpAaK3MnWohfCo5sxvtNKVB1CTpJ513KkJEe-c-wzGGy0UcUkXZNz4-t6BBCJPjr77_CrSZMfJi64E0W9D8G-1dGiQo5IulKcwC9KasQHPfyGyYPoHVgqd5q00jr9A",
    imageAlt: "Pulse Analytics Dashboard",
    githubUrl: "https://github.com/adriaalvarado/pulse-analytics", // Reemplaza con tu enlace de GitHub
    projectUrl: "#"
  },
  {
    id: 2,
    title: "Lumen Commerce",
    subtitle: "Next.js • Stripe • Prisma",
    description: "Plataforma headless de comercio electrónico que impulsa a más de 200 tiendas. Búsqueda de productos en sub-segundos, pasarela de pago Stripe integrada y renderizado ultra rápido desde el Edge.",
    tags: ["NEXT.JS", "STRIPE", "PRISMA", "REDIS"],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYMiHnk0h6hJ9Y25EeSYg08ccbONk_bTVtoTwOlncLNcE9vj-xg0m0b3WRoLKlyQ2yKzst9Tc2yHWpaGTMEnBjebNOcRIsviKr2kczwsnkvxk18cHzKHTmg19cm-DfaWere2mLalnG4SRlMHvbvS83kLc-25Svmo9AXJkrurnx2PUtbVKsQt6wLYQgSmVshdFvEeqm4iakp_vCIEji8LkV-Irs2pknsLNEDteCinrQPlYq6wnjIe80OA",
    imageAlt: "Lumen Commerce Platform",
    githubUrl: "https://github.com/adriaalvarado/lumen-commerce", // Reemplaza con tu enlace de GitHub
    projectUrl: "#"
  }
];

export default function Projects() {
  // Estado de React para controlar qué proyecto está seleccionado en el modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="mt-section-gap pt-section-gap" id="projects">
      {/* Cabecera de la Sección */}
      <div className="flex items-end justify-between mb-12 border-b border-white/20 pb-4">
        <div>
          <span className="section-index font-label-mono text-label-mono">// 01</span>
          <h2 className="font-headline-md text-headline-md text-white mt-2">
            Projects.<span className="text-primary animate-pulse">|</span>
          </h2>
        </div>
        <div className="font-label-mono text-label-mono text-gray-400 text-sm uppercase tracking-wider hidden md:block">
          Selected • 2024-2026
        </div>
      </div>

      {/* Lista de Proyectos */}
      <div className="space-y-8">
        {PROJECTS_DATA.map((project, index) => {
          // Alternamos la dirección del diseño en desktop (imagen a la izquierda o derecha)
          const isEven = index % 2 === 0;
          return (
            <div 
              key={project.id} 
              className={`project-card rounded-2xl p-6 md:p-10 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center interactive`}
            >
              {/* Información del Proyecto */}
              <div className="flex-1 space-y-6">
                <div className="font-label-mono text-label-mono text-primary text-xs tracking-widest uppercase">
                  {project.subtitle}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white font-bold">{project.title}</h3>
                <p className="font-body-md text-body-md text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag font-label-mono text-label-mono px-2 py-1 rounded-sm text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 font-button text-button text-primary hover:text-red-400 transition-colors mt-4 bg-transparent border-0 cursor-pointer p-0 interactive"
                >
                  View details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>

              {/* Imagen Interactiva (Haz clic en ella para abrir el modal) */}
              <div 
                onClick={() => setSelectedProject(project)}
                className="flex-1 w-full overflow-hidden rounded-xl border border-white/20 relative cursor-pointer group/img aspect-video"
              >
                {/* Capa de mezcla roja clásica del tema */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 pointer-events-none group-hover/img:bg-transparent transition-colors duration-300"></div>
                
                {/* Capa oscura y botón 'Ver detalles' en hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <span className="bg-primary text-white font-button text-button px-4 py-2 rounded-lg flex items-center gap-2 transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300">
                    <span className="material-symbols-outlined">zoom_in</span> Ver detalles
                  </span>
                </div>

                <img
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover/img:scale-105 rounded-xl will-change-transform"
                  src={project.imageSrc}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ==========================================
          MODAL DE DETALLES ANIMADO (LIGHTBOX)
          Se activa al hacer clic en las imágenes o en 'View details'
          ========================================== */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          {/* Contenedor del Modal */}
          <div 
            className="relative w-full max-w-4xl bg-[#111111] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] animate-scaleIn"
            onClick={(e) => e.stopPropagation()} // Detiene la propagación para que no se cierre al hacer clic dentro
          >
            {/* Botón de Cerrar */}
            <button 
              className="absolute top-4 right-4 z-20 text-white bg-black/60 hover:bg-black/80 border border-white/20 p-2 rounded-full transition-colors flex items-center justify-center interactive cursor-pointer"
              onClick={() => setSelectedProject(null)}
              aria-label="Cerrar modal"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Panel Izquierdo: Imagen del Proyecto */}
            <div className="flex-1 relative min-h-[200px] sm:min-h-[300px] md:min-h-0 bg-black flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
              <img 
                src={selectedProject.imageSrc} 
                alt={selectedProject.imageAlt} 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Panel Derecho: Información y Botón GitHub */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
              <div className="space-y-4">
                <div className="font-label-mono text-label-mono text-primary text-xs tracking-widest uppercase">
                  {selectedProject.subtitle}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white font-bold">
                  {selectedProject.title}
                </h3>
                {/* Resumen del proyecto detallado */}
                <p className="font-body-md text-body-md text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="tech-tag font-label-mono text-label-mono px-2 py-1 rounded-sm text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 btn-primary font-button text-button px-5 py-3 rounded-lg flex items-center justify-center gap-2 text-center interactive cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Revisar Código en GitHub
                </a>
                <a 
                  href={selectedProject.projectUrl}
                  className="flex-1 btn-secondary font-button text-button px-5 py-3 rounded-lg flex items-center justify-center gap-2 text-center interactive cursor-pointer"
                >
                  <span>Ver Demo</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
