import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const [ref, isVisible] = useScrollReveal()

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/59171045761',
      icon: <i className='bx bxl-whatsapp text-2xl'></i>,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/deysivela',
      icon: <i className='bx bxl-github text-2xl'></i>,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/deysi-vela-estrada-082303249',
      icon: <i className='bx bxl-linkedin-square text-2xl'></i>,
    }
  ]

  return (
    <section id="contacto" className="py-24 px-6 md:px-12 lg:px-20 relative" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className={`w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
            Ponte en <span className="gradient-text">Contacto</span>
          </h2>
        </div>

        <div className="w-full">
          {/* Contact Info */}
          <div className="text-center flex flex-col items-center w-full">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Trabajemos juntos
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-12">
              {/* Social Links on the left */}
              <div className="flex gap-3 pr-6 lg:border-r border-dark-border">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass border border-dark-border flex items-center justify-center text-text-muted hover:text-primary-light hover:border-primary/40 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Contact Cards */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-dark-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-light">
                    <i className='bx bx-envelope text-2xl'></i>
                  </div>
                  <div className="text-left">
                    <span className="text-text-muted text-xs block uppercase tracking-wider">Email</span>
                    <a href="mailto:deysivelaestrada@gmail.com" className="text-text-primary font-sm lg:font-medium hover:text-primary-light transition-colors">deysivelaestrada@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
