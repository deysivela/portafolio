import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="sobre-mi" className=" flex items-center justify-center py-24 px-6 md:px-12 lg:px-20 relative" ref={ref}>
      <div className={`max-w-screen-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* About Content */}
          <p className="text-text-secondary mb-6 leading-relaxed">
            Soy Ingeniera Informática enfocada en el desarrollo web fullstack,
            dedicada a crear aplicaciones modernas, eficientes y centradas en el usuario.
            Trabajo tanto en frontend como en backend, aplicando buenas prácticas de desarrollo y manteniéndome en constante aprendizaje de nuevas tecnologías y tendencias.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 justify-center">
            {[
              { number: '2+', label: 'Años de experiencia' },
              { number: '10+', label: 'Proyectos completados' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl glass border border-dark-border hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-2xl md:text-3xl font-bold gradient-text block">
                  {stat.number}
                </span>
                <span className="text-text-muted text-xs mt-1 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
