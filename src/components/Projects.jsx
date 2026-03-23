import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Crypto Tracker',
    description:
      'Plataforma en tiempo real para el seguimiento de criptomonedas con gráficos avanzados.',
    tags: ['React', 'API REST', 'Chart.js', 'Tailwind'],
    image: '/crypto_tracker.png',
    github: '#',
    live: '#',
  },
  {
    title: 'Historial Clínico',
    description:
      'Sistema de informacion web para los historiales clinicos de centro de rehabilitacion, con calendario intuitivo, reportes de historiales, permisos basado en roles.',
    tags: ['React', 'Node.js', 'MySQL', 'JS'],
    image: '/historial.png',
    github: 'https://github.com/deysivela/rehabilitacion',
    live: '#',
  },
]

export default function Projects() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="proyectos" className="py-24 px-6 md:px-12 lg:px-20 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className={`max-w-screen-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Title */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl glass border border-dark-border overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-dark-lighter text-text-muted border border-dark-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-center gap-6 mt-auto w-full">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-primary-light transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Código
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
