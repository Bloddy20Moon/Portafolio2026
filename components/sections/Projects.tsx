"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

// Estructura de TypeScript que define los campos requeridos para cada proyecto.
// Puedes agregar nuevos campos aquí si los necesitas en el futuro.
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  images: string[];
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
    title: "RestoApp",
    subtitle: "React • .Net Core • TSQL",
    description: "Este sistema diseñado para automatizar las ventas, el control de pedidos y la emisión de comprobantes en el sector gastronómico, optimizando las operaciones diarias y el manejo de caja de un negocio.",
    tags: ["REACT", ".Net Core", "TSQL"],
    images: ["/images/RestoApp1.webp", "/images/RestoApp2.webp", "/images/RestoApp3.webp"],
    imageAlt: "RestoApp Interface Screenshot",
    githubUrl: "https://github.com/adriaalvarado/pulse-analytics",
    projectUrl: "#"
  },
  {
    id: 2,
    title: "Gestión Comercial de Calzado",
    subtitle: "Angular • Nest.JS • MySQL",
    description: "Sistema backend modular construido con NestJS enfocado en la administración eficiente de productos, marcas, tallas y stock en tiempo real. Incorpora seguridad avanzada con roles y permisos, carga de archivos y flujos automatizados de notificaciones.",
    tags: ["Angular", "NestJS", "MySQL"],
    images: [
      "/images/zapateria/UsuarioZapatilla4.webp",
      "/images/zapateria/Zapatillas2.webp",
      "/images/zapateria/Zapatillas3.webp",
    ],
    imageAlt: "Lumen Commerce Platform Screenshot",
    githubUrl: "https://github.com/adriaalvarado/lumen-commerce",

    projectUrl: "#"
  }
];

export default function Projects() {
  // Estado de React para controlar qué proyecto está seleccionado en el modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Estado de React para controlar la imagen activa del carrusel dentro del modal
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Referencia para rastrear el inicio del gesto táctil en móviles
  const touchStartX = useRef<number>(0);

  // Abrir modal reseteando el carrusel interno al primer slide
  const handleOpenModal = useCallback((project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Funciones de navegación para las imágenes del carrusel del modal
  const nextImage = useCallback(() => {
    if (selectedProject) {
      setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setActiveImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  }, [selectedProject]);

  // Gestos táctiles en móviles para el carrusel del modal
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!selectedProject || selectedProject.images.length <= 1) return;
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;
    if (distance > 50) {
      nextImage();
    } else if (distance < -50) {
      prevImage();
    }
  };

  // Efecto para controlar atajos de teclado (Escape y Flechas para el carrusel del modal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowRight") {
        if (selectedProject && selectedProject.images.length > 1) {
          nextImage();
        }
      } else if (e.key === "ArrowLeft") {
        if (selectedProject && selectedProject.images.length > 1) {
          prevImage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, nextImage, prevImage, handleClose]);

  return (
    <section className="mt-section-gap pt-section-gap" id="projects">
      {/* Cabecera de la Sección */}
      <div className="flex items-end justify-between mb-12 border-b border-white/20 pb-4">
        <div>
          <span className="section-index font-label-mono text-label-mono">{"// 01"}</span>
          <h2 className="font-headline-md text-headline-md text-white mt-2">
            Proyectos.<span className="text-primary animate-pulse">|</span>
          </h2>
        </div>
        <div className="font-label-mono text-label-mono text-gray-400 text-sm uppercase tracking-wider hidden md:block">
          Selected • 2024-2026
        </div>
      </div>

      {/* Lista de Proyectos (Formato Vertical Original) */}
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
                  onClick={() => handleOpenModal(project)}
                  className="inline-flex items-center gap-2 font-button text-button text-primary hover:text-red-400 transition-colors mt-4 bg-transparent border-0 cursor-pointer p-0 interactive"
                >
                  Ver detalles
                  <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </button>
              </div>

              {/* Imagen Interactiva (Haz clic en ella para abrir el modal) */}
              <div
                onClick={() => handleOpenModal(project)}
                className="flex-1 w-full overflow-hidden rounded-xl border border-white/20 relative cursor-pointer group/img aspect-video interactive"
              >
                {/* Capa de mezcla roja clásica del tema */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 pointer-events-none group-hover/img:bg-transparent transition-colors duration-300"></div>

                {/* Capa oscura y botón 'Ver detalles' en hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <span className="bg-primary text-white font-button text-button px-4 py-2 rounded-lg flex items-center gap-2 transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Ver detalles
                  </span>
                </div>

                <Image
                  alt={project.imageAlt}
                  src={project.images[0]}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover/img:scale-105 rounded-xl will-change-transform"
                  priority={index === 0}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ==========================================
          MODAL DE DETALLES ANIMADO (LIGHTBOX)
          Se activa al hacer clic en las imágenes o en 'Ver detalles'
          ========================================== */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 animate-fadeIn"
          onClick={handleClose}
        >
          {/* Contenedor del Modal */}
          <div
            className="relative w-full max-w-4xl bg-[#111111] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] animate-scaleIn"
            onClick={(e) => e.stopPropagation()} // Detiene la propagación para que no se cierre al hacer clic dentro
          >
            {/* Botón de Cerrar - SVG X nativo en lugar de fuente tipográfica */}
            <button
              className="absolute top-4 right-4 z-30 text-white bg-black/60 hover:bg-black/80 border border-white/20 p-2 rounded-full transition-colors flex items-center justify-center interactive cursor-pointer"
              onClick={handleClose}
              aria-label="Cerrar modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Panel Izquierdo: Imagen del Proyecto / Carrusel en el Modal */}
            <div
              className="flex-1 relative min-h-[200px] sm:min-h-[300px] md:min-h-0 bg-black flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/10 aspect-video md:aspect-auto select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div key={activeImageIndex} className="w-full h-full relative animate-fadeIn">
                <Image
                  src={selectedProject.images[activeImageIndex]}
                  alt={`${selectedProject.imageAlt} - Vista ${activeImageIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Controles de Navegación del Carrusel en el Modal */}
              {selectedProject.images.length > 1 && (
                <>
                  {/* Flecha Izquierda */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-25 p-2 rounded-full bg-black/60 hover:bg-black/85 border border-white/25 hover:border-primary/50 text-white hover:text-primary transition-all cursor-pointer flex items-center justify-center interactive"
                    aria-label="Imagen anterior"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Flecha Derecha */}
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-25 p-2 rounded-full bg-black/60 hover:bg-black/85 border border-white/25 hover:border-primary/50 text-white hover:text-primary transition-all cursor-pointer flex items-center justify-center interactive"
                    aria-label="Imagen siguiente"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Puntos Indicadores */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-25 flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-full border border-white/10">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer interactive ${activeImageIndex === idx ? "bg-primary w-4" : "bg-white/40 hover:bg-white/60 w-2"
                          }`}
                        aria-label={`Ir a la imagen ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
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
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Revisar Código en GitHub
                </a>
                <a
                  href={selectedProject.projectUrl}
                  className="flex-1 btn-secondary font-button text-button px-5 py-3 rounded-lg flex items-center justify-center gap-2 text-center interactive cursor-pointer"
                >
                  <span>Ver Demo</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
