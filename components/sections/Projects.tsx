export default function Projects() {
  return (
    <section className="mt-section-gap pt-section-gap" id="projects">
      <div className="flex items-end justify-between mb-16 border-b border-white/20 pb-4">
        <div>
          <span className="section-index font-label-mono text-label-mono">// 01</span>
          <h2 className="font-headline-md text-headline-md text-white mt-2">Projects.</h2>
        </div>
        <div className="font-label-mono text-label-mono text-gray-400 text-sm uppercase tracking-wider hidden md:block">
          Selected • 2024-2026
        </div>
      </div>
      <div className="space-y-gutter">
        {/* Project 1 */}
        <div className="project-card rounded-2xl p-6 md:p-12 flex flex-col md:flex-row gap-8 items-center interactive">
          <div className="flex-1 space-y-6">
            <div className="font-label-mono text-label-mono text-primary text-xs tracking-widest uppercase">
              React • Node • Postgres
            </div>
            <h3 className="font-headline-sm text-headline-sm text-white">Pulse Analytics</h3>
            <p className="font-body-md text-body-md text-gray-300">
              A SaaS analytics dashboard processing 50M+ events monthly. Real-time charts, custom segmentation, and sub-200ms queries.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag font-label-mono text-label-mono px-2 py-1 rounded-sm text-[10px]">REACT</span>
              <span className="tech-tag font-label-mono text-label-mono px-2 py-1 rounded-sm text-[10px]">NODE.JS</span>
              <span className="tech-tag font-label-mono text-label-mono px-2 py-1 rounded-sm text-[10px]">POSTGRESQL</span>
              <span className="tech-tag font-label-mono text-label-mono px-2 py-1 rounded-sm text-[10px]">CLICKHOUSE</span>
            </div>
            <a className="inline-flex items-center gap-2 font-button text-button text-primary hover:text-primary-container transition-colors mt-4" href="#">
              View project <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="flex-1 w-full overflow-hidden rounded-xl border border-white/20 relative">
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 pointer-events-none"></div>
            <img
              alt="Pulse Analytics Dashboard"
              className="w-full h-auto object-cover transform transition-transform duration-500 rounded-xl"
              data-alt="A highly detailed, professional UI design mockup of a dark-mode analytics dashboard. The interface features complex data visualizations including bright neon green bar charts, line graphs, and donut charts against a deep, pure black and dark charcoal grey background. The layout is structured in a clean, modern grid with high-tech glassmorphism effects and subtle red accent highlights. The aesthetic is premium, technical, and data-dense, suitable for a high-end SaaS product."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz1mFWsZh0pfyHym6fqspjf2pJpnaXLiSsRtN1eeC58ZIlnSRYH_VOrWvxK2t4cq7c8EaLijDpx6dBmktDxYJ3DM7IS6vLfR26rOBgImz3RM0yUw7q4SdK-VTXEpAaK3MnWohfCo5sxvtNKVB1CTpJ513KkJEe-c-wzGGy0UcUkXZNz4-t6BBCJPjr77_CrSZMfJi64E0W9D8G-1dGiQo5IulKcwC9KasQHPfyGyYPoHVgqd5q00jr9A"
            />
          </div>
        </div>
        {/* Project 2 */}
        <div className="project-card rounded-2xl p-6 md:p-12 flex flex-col md:flex-row-reverse gap-8 items-center interactive">
          <div className="flex-1 space-y-6">
            <div className="font-label-mono text-label-mono text-primary text-xs tracking-widest uppercase">
              Next.js • Stripe • Prisma
            </div>
            <h3 className="font-headline-sm text-headline-sm text-white">Lumen Commerce</h3>
            <p className="font-body-md text-body-md text-gray-300">
              Headless e-commerce platform powering 200+ merchants. Sub-second product search, Stripe checkout, and edge-rendered storefronts.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag font-label-mono text-label-mono px-2 py-1 rounded-sm text-[10px]">NEXT.JS</span>
              <span className="tech-tag font-label-mono text-label-mono px-2 py-1 rounded-sm text-[10px]">STRIPE</span>
              <span className="tech-tag font-label-mono text-label-mono px-2 py-1 rounded-sm text-[10px]">PRISMA</span>
              <span className="tech-tag font-label-mono text-label-mono px-2 py-1 rounded-sm text-[10px]">REDIS</span>
            </div>
            <a className="inline-flex items-center gap-2 font-button text-button text-primary hover:text-primary-container transition-colors mt-4" href="#">
              View project <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="flex-1 w-full overflow-hidden rounded-xl border border-white/20">
            <img
              alt="Lumen Commerce Platform"
              className="w-full h-auto object-cover transform transition-transform duration-500 rounded-xl"
              data-alt="A sleek, modern e-commerce storefront UI design in dark mode. The layout showcases a grid of high-quality fashion product imagery. The interface utilizes a deep obsidian background with stark white typography and vibrant crimson red buttons for primary actions like 'Add to Cart'. The design incorporates subtle glassmorphic panels and thin, elegant white borders, creating a minimalist, luxury digital shopping experience."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYMiHnk0h6hJ9Y25EeSYg08ccbONk_bTVtoTwOlncLNcE9vj-xg0m0b3WRoLKlyQ2yKzst9Tc2yHWpaGTMEnBjebNOcRIsviKr2kczwsnkvxk18cHzKHTmg19cm-DfaWere2mLalnG4SRlMHvbvS83kLc-25Svmo9AXJkrurnx2PUtbVKsQt6wLYQgSmVshdFvEeqm4iakp_vCIEji8LkV-Irs2pknsLNEDteCinrQPlYq6wnjIe80OA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
