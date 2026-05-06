'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const phrases = ['Software Engineer', 'Full-Stack Developer', 'AI Tinkerer', 'Automation Builder']

const Hero = () => {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]
    const speed = deleting ? 40 : 80
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500)
        return
      }
      if (deleting && text === '') {
        setDeleting(false)
        setPhraseIdx(i => (i + 1) % phrases.length)
        return
      }
      setText(current.substring(0, deleting ? text.length - 1 : text.length + 1))
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, phraseIdx])

  return (
    <section id="top" className="relative min-h-screen flex items-center grid-bg pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl animate-fade-in">
          <p className="font-mono text-primary mb-6 text-sm md:text-base">
            <span className="text-muted-foreground">$</span> whoami
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            Aaron <span className="text-gradient">Tumbokon</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-mono text-muted-foreground mb-6 min-h-[2.5rem] md:min-h-[3rem]">
            <span className="text-primary">&gt;</span>{' '}
            <span className="blink-caret">{text}</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            I build AI-powered tools, automations, and full-stack web apps. Passionate about turning
            ambitious ideas into shipped, reliable software.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-semibold hover:animate-glow transition-all hover:gap-3"
            >
              view_projects.sh
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary/40 text-primary font-mono text-sm hover:bg-primary/10 transition-colors"
            >
              <Mail size={16} /> contact_me.sh
            </a>
            <a
              href="https://github.com/aj-et"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-muted-foreground font-mono text-sm hover:text-primary hover:border-primary/40 transition-colors"
            >
              <GithubIcon /> github
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground animate-float">
        scroll ↓
      </div>
    </section>
  )
}

export default Hero
