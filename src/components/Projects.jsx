import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Punto de Venta',
    description:
      'Sistema de Punto de Venta (POS) de escritorio con letor de codigo de barra modulo de ventas, impresion de ticket, gestion de producto, control de stock, reportes de ventas.',
    tags: ['C#', '.NET', 'SQLite'],
    image: '/punto_venta.png',
    github: 'https://github.com/deysivela/sistema_venta',
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
                    <i className='bx bxl-github text-xl'></i>
                    Código
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors duration-300"
                  >
                    <i className='bx bx-link-external text-xl'></i>
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
