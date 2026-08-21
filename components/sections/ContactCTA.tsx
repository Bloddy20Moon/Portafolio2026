export default function ContactCTA() {
  return (
    <section className="mt-section-gap pb-section-gap text-center" id="contact">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 font-label-mono text-label-mono text-primary uppercase tracking-widest">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          Currently available • 2-3 project slots open
        </div>
        <h2 className="font-display-lg-mobile text-display-lg-mobile md:text-display-lg text-white">
          Let's build something.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
          <a
            className="btn-primary font-button text-button px-8 py-4 rounded-lg interactive w-full md:w-auto"
            href="#contact"
          >
            Start a conversation
          </a>
          <a
            className="btn-secondary font-button text-button px-8 py-4 rounded-lg interactive w-full md:w-auto"
            href="mailto:alex@example.com"
          >
            Or email me directly
          </a>
        </div>
        <p className="text-gray-500 font-label-mono text-xs">Replies within 24h • Mon-Fri</p>
      </div>
    </section>
  );
}
