import Image from "next/image";

export default function About() {
  return (
    <section className="mt-section-gap pt-section-gap" id="about">
      <div className="flex flex-col md:flex-row items-center gap-gutter">
        <div className="flex-1 space-y-6">
          <div>
            <span className="section-index font-label-mono text-label-mono">// 03</span>
            <h2 className="font-headline-md text-headline-md text-white mt-2">Sobre Mi</h2>
          </div>
          <div className="space-y-4 font-body-lg text-body-lg text-gray-300">
            <p>
              ¡Hola! Soy desarrollador Full Stack con pasión por crear aplicaciones web y APIs que realmente solucionen problemas. Cuento con formación técnica titulada y sigo sumando conocimientos como estudiante de Ingeniería de Software.

              Me especializo en conectar ideas con código sólido usando C#, .NET, React y Angular, cuidando siempre la seguridad, el rendimiento y una experiencia de usuario intuitiva. Disfruto trabajar en equipo bajo metodologías ágiles, adaptarme rápido a nuevos retos y asegurar que cada entrega esté bien probada y lista para aportar valor real a tu proyecto.

              ¿Tienes una idea o proyecto en mente? ¡Hagámoslo realidad juntos!
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="tech-tag font-label-mono text-label-mono px-3 py-1 rounded-sm text-xs">1 YRS EXP</span>
            <span className="tech-tag font-label-mono text-label-mono px-3 py-1 rounded-sm text-xs">COLABORADOR DE CÓDIGO ABIERTO</span>
            <span className="tech-tag font-label-mono text-label-mono px-3 py-1 rounded-sm text-xs">REMOTE-FRIENDLY</span>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md mx-auto md:mr-0 mt-12 md:mt-0">
          <div className="w-full rounded-2xl overflow-hidden relative">
            <Image
              src="/images/sobremi.webp"
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
