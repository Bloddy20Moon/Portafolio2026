export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/20">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md">
        <div className="font-headline-sm text-headline-sm font-bold text-white flex items-center gap-2 interactive">
          Adrian Alvarado{" "}
          <span className="font-label-mono text-label-mono text-primary bg-primary/10 px-2 py-1 rounded-sm text-[10px]">
            Full-Stack Dev
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-button text-button text-gray-300">
          <a className="hover:text-white transition-colors interactive" href="#projects">
            Proyectos
          </a>
          <a className="hover:text-white transition-colors interactive" href="#stack">
            Stack
          </a>
          <a className="hover:text-white transition-colors interactive" href="#about">
            Sobre Mi
          </a>
          <a className="hover:text-white transition-colors interactive" href="#contact">
            Contacto
          </a>
        </div>

      </div>
    </nav>
  );
}
