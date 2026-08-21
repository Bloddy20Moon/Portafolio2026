export default function Hero() {
  return (
    <section className="min-h-[819px] flex flex-col md:flex-row items-center justify-between gap-gutter mt-section-gap">
      <div className="flex-1 space-y-stack-lg">
        <div className="flex items-center gap-2 font-label-mono text-label-mono text-primary uppercase tracking-widest">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          Available for hire • 2024
        </div>
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-white">
          Building apps<br />people<br />actually use.<span className="text-primary animate-pulse">|</span>
        </h1>
        <p className="font-body-lg text-body-lg text-gray-300 max-w-md">
          Full-stack developer specialising in React, Node.js, and TypeScript. Fast, accessible, and built to scale.
        </p>
        <div className="flex flex-wrap gap-4 pt-stack-md">
          <a className="btn-primary font-button text-button px-6 py-3 rounded-lg flex items-center gap-2 interactive" href="#projects">
            View projects <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a className="btn-secondary font-button text-button px-6 py-3 rounded-lg flex items-center gap-2 interactive" href="#">
            <span className="material-symbols-outlined">download</span> Download CV
          </a>
        </div>
        <div className="flex flex-wrap gap-2 pt-stack-lg">
          <span className="tech-tag font-label-mono text-label-mono px-3 py-1 rounded-sm text-xs">REACT</span>
          <span className="tech-tag font-label-mono text-label-mono px-3 py-1 rounded-sm text-xs">NODE.JS</span>
          <span className="tech-tag font-label-mono text-label-mono px-3 py-1 rounded-sm text-xs">TYPESCRIPT</span>
          <span className="tech-tag font-label-mono text-label-mono px-3 py-1 rounded-sm text-xs">POSTGRESQL</span>
          <span className="tech-tag font-label-mono text-label-mono px-3 py-1 rounded-sm text-xs">AWS</span>
        </div>
      </div>
      <div className="flex-1 w-full max-w-lg mt-12 md:mt-0">
        <div className="glass-panel rounded-xl p-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
          <div className="flex items-center gap-2 mb-4 border-b border-white/20 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="font-label-mono text-label-mono text-sm leading-relaxed overflow-x-auto text-gray-300">
            <span className="text-gray-500">// Building the future</span>{"\n"}
            <span className="text-primary">const</span> Adrian = {"{"}{"\n"}
            {"  "}role: <span className="text-[#a7f3d0]">'Full-Stack Dev'</span>,{"\n"}
            {"  "}stack: [<span className="text-[#a7f3d0]">'React'</span>, <span className="text-[#a7f3d0]">'Node'</span>, <span className="text-[#a7f3d0]">'TS'</span>],{"\n"}
            {"  "}open: <span className="text-primary">true</span>{"\n"}
            {"}"}
          </pre>
        </div>
      </div>
    </section>
  );
}
