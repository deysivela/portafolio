import { useState, useEffect } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Desarrolladora Web Full Stack '

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1))
      index++
      if (index >= fullText.length) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '3s' }}
        />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1.5s' }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-light mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
          Disponible para proyectos
        </div>

        {/* Greeting */}
        <p className="text-text-secondary text-lg md:text-xl mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          ¡Hola! Soy
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <span className="gradient-text">Deysi Vela Estrada</span>
        </h1>

        {/* Typing effect */}
        <div className="h-10 flex items-center justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <span className="text-xl md:text-2xl text-text-secondary font-light">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-primary-light ml-1 animate-pulse" />
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a
            href="#proyectos"
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
          >
            <span className="relative z-10">Ver Proyectos</span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 rounded-xl border border-dark-border text-text-primary font-semibold text-base transition-all duration-300 hover:border-primary-light hover:text-primary-light hover:bg-primary/5 hover:scale-105"
          >
            Contáctame
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <a href="#sobre-mi" className="inline-flex flex-col items-center gap-2 text-text-muted hover:text-primary-light transition-colors duration-300">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <i className='bx bx-chevron-down text-2xl animate-bounce'></i>
          </a>
        </div>
      </div>
    </section>
  )
}
