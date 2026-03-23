import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const [ref, isVisible] = useScrollReveal()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/59171045761',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.513 1.441 5.474 1.442h.005c5.332 0 9.671-4.339 9.674-9.67.001-2.583-1.007-5.013-2.841-6.848-1.834-1.835-4.265-2.844-6.848-2.845-5.332 0-9.672 4.339-9.675 9.671-.001 1.916.499 3.787 1.447 5.425l-.943 3.445 3.524-.925zm9.846-5.419c-.269-.134-1.594-.787-1.841-.876-.246-.089-.425-.134-.605.134-.18.269-.694.876-.851 1.055-.157.18-.314.202-.583.067-.269-.134-1.138-.419-2.167-1.338-.801-.715-1.342-1.597-1.499-1.866-.157-.269-.017-.414.118-.548.121-.121.269-.314.404-.471.134-.157.18-.269.269-.449.089-.18.045-.337-.022-.471-.067-.134-.605-1.458-.829-1.996-.219-.527-.439-.454-.605-.454-.157 0-.337-.022-.516-.022-.18 0-.471.067-.718.337-.246.269-.941.919-.941 2.243 0 1.324.964 2.599 1.098 2.778.134.18 1.898 2.898 4.597 4.061.643.277 1.144.442 1.536.566.645.205 1.233.176 1.697.107.518-.077 1.594-.65 1.817-1.278.224-.628.224-1.166.157-1.278-.067-.112-.246-.18-.516-.314z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/deysivela',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/deysi-vela-estrada-082303249',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
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
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
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
