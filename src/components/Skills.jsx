import { useScrollReveal } from '../hooks/useScrollReveal'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
      { name: '.NET', icon: 'https://cdn.simpleicons.org/dotnet/512BD4' },
      { name: 'Express', icon: 'https://cdn.simpleicons.org/express/ffffff' }, // White for dark mode
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    ],
  },
  {
    title: 'Herramientas',
    skills: [
      { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/ffffff' }, // White for dark mode
      { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
      { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
    ],
  },
]

export default function Skills() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="habilidades" className="py-24 px-6 md:px-12 lg:px-20 relative" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className={`max-w-screen-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="rounded-3xl glass border border-dark-border p-8 hover:border-primary/40 transition-all duration-500 group"
              style={{ transitionDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-text-primary mb-10 text-center flex items-center justify-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
                {category.title}
                <span className="w-8 h-1 bg-gradient-to-r from-transparent to-accent rounded-full" />
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-dark-card/40 border border-transparent hover:border-primary/20 hover:bg-dark-card/60 transition-all duration-300 group/skill"
                    style={{ transitionDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="mb-4 transform group-hover/skill:scale-110 group-hover/skill:rotate-3 transition-transform duration-300">
                      <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-text-secondary group-hover/skill:text-text-primary transition-colors text-center whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
