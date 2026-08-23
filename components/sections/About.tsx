import Image from "next/image";

export default function About() {
  return (
    <section className="mt-section-gap pt-section-gap" id="about">
      <div className="flex flex-col md:flex-row items-center gap-gutter">
        <div className="flex-1 space-y-6">
          <div>
            <span className="section-index font-label-mono text-label-mono">// 03</span>
            <h2 className="font-headline-md text-headline-md text-white mt-2">About me.</h2>
          </div>
          <div className="space-y-4 font-body-lg text-body-lg text-gray-300">
            <p>
              I started writing code at 14, built my first SaaS at 19, and have spent the last five years shipping
              production software for startups and growing teams across the US and Europe. My approach is opinionated
              but pragmatic: types everywhere, tests where they matter, performance budgets enforced, accessibility
              never an afterthought. I care about the boring parts because they compound.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="tech-tag font-label-mono text-label-mono px-3 py-1 rounded-sm text-xs">5 YRS EXP</span>
            <span className="tech-tag font-label-mono text-label-mono px-3 py-1 rounded-sm text-xs">20+ PROJECTS</span>
            <span className="tech-tag font-label-mono text-label-mono px-3 py-1 rounded-sm text-xs">OPEN SOURCE CONTRIBUTOR</span>
            <span className="tech-tag font-label-mono text-label-mono px-3 py-1 rounded-sm text-xs">REMOTE-FRIENDLY</span>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md mx-auto md:mr-0 mt-12 md:mt-0">
          <div className="w-full rounded-2xl overflow-hidden relative">
            <Image
              src="/images/about_me.webp"
              alt="Professional photograph of developer"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
