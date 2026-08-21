export default function Testimonials() {
  const reviews = [
    {
      text: '"Alex shipped in two weeks what our previous contractor couldn\'t deliver in three months. Clean code, zero hand-holding."',
      author: "Maya Patel",
      role: "CTO @ Medisync Labs",
    },
    {
      text: '"Rare combination of speed and craft. Our pipeline went from 2.4s to 280ms after his rewrite. Numbers don\'t lie."',
      author: "Daniel Okafor",
      role: "Engineering Lead @ Steppath",
    },
    {
      text: '"He thinks like a product engineer, not a code-monkey. Pushed back where it mattered, shipped where it counted."',
      author: "Lena Hofmann",
      role: "Founder @ Amber_AI",
    },
  ];

  return (
    <section className="mt-section-gap pt-section-gap" id="testimonials">
      <div className="flex items-end justify-between mb-16 border-b border-white/20 pb-4">
        <div>
          <span className="section-index font-label-mono text-label-mono">// 05</span>
          <h2 className="font-headline-md text-headline-md text-white mt-2">
            From clients &amp; teams.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="project-card p-8 rounded-2xl border-primary/30 flex flex-col justify-between"
          >
            <p className="text-gray-300 italic mb-8">{review.text}</p>
            <div>
              <div className="text-white font-bold">{review.author}</div>
              <div className="text-primary text-xs font-label-mono uppercase mt-1">
                {review.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
