export default function OpenSource() {
  const stats = [
    { value: "4.2k", label: "Stars earned" },
    { value: "47", label: "Repos public" },
    { value: "1,283", label: "Contributions • 2024" },
  ];

  const repos = [
    {
      icon: "terminal",
      name: "use-async-state",
      desc: "Tiny React hook for cancellable async state. Zero deps.",
      lang: "TypeScript",
      stars: "★ 1.8k",
    },
    {
      icon: "database",
      name: "edge-cache",
      desc: "State-wide re-validatable cache primitive for edge runtimes.",
      lang: "TypeScript",
      stars: "★ 910",
    },
    {
      icon: "storage",
      name: "pg-migrate-lite",
      desc: "Minimal Postgres migration runner. No frameworks attached.",
      lang: "JavaScript",
      stars: "★ 612",
    },
  ];

  return (
    <section className="mt-section-gap pt-section-gap" id="open-source">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="section-index font-label-mono text-label-mono">// 04</span>
        <h2 className="font-headline-md text-headline-md text-white mt-2">Open source.</h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-xl text-center">
            <div className="text-primary font-display-lg-mobile text-display-lg-mobile mb-2">
              {stat.value}
            </div>
            <div className="text-gray-400 font-label-mono text-xs uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Repos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {repos.map((repo, idx) => (
          <div key={idx} className="project-card p-6 rounded-xl space-y-4 interactive">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">{repo.icon}</span>
              <h4 className="font-headline-sm text-lg">{repo.name}</h4>
            </div>
            <p className="text-gray-400 text-sm">{repo.desc}</p>
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <span className="text-xs font-label-mono text-gray-500">{repo.lang}</span>
              <span className="text-xs font-label-mono text-primary">{repo.stars}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
