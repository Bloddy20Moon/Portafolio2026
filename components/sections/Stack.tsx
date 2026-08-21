export default function Stack() {
  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Angular",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Power BI",
    "AWS",
    
  ];

  return (
    <section className="mt-section-gap pt-section-gap" id="stack">
      <div className="mb-16">
        <span className="section-index font-label-mono text-label-mono">// 02</span>
        <h2 className="font-headline-md text-headline-md text-white mt-2">The stack.</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="glass-panel p-4 rounded-xl flex items-center justify-center interactive hover:border-primary transition-colors duration-300"
          >
            <span className="font-label-mono text-label-mono text-gray-300">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
