export default function Footer() {
  return (
    <footer className="w-full py-stack-lg mt-section-gap border-t border-white/20 bg-[#111111]">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="font-headline-sm text-headline-sm text-white mb-4 md:mb-0">
          Adrian Alvarado
        </div>
        <div className="font-body-md text-body-md text-gray-400 text-center md:text-left">
          © 2026 Adrian Alvarado
        </div>
        <div className="flex gap-4 mt-4 md:mt-0 font-body-md text-body-md">
          <a className="text-gray-400 hover:text-primary transition-colors interactive" href="#">
            LinkedIn
          </a>
          <a className="text-gray-400 hover:text-primary transition-colors interactive" href="#">
            GitHub
          </a>
          <a className="text-gray-400 hover:text-primary transition-colors interactive" href="#">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
