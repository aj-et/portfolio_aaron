'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about',      label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#stack',      label: 'stack' },
  { href: '#projects',   label: 'projects' },
  { href: '#contact',    label: 'contact' },
]

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-border/50">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-mono text-primary text-lg font-bold tracking-tight hover:text-primary-glow transition-colors"
          >
            <span className="text-muted-foreground">&lt;/</span> aaron{' '}
            <span className="text-muted-foreground">&gt;</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="story-link text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary">{String(i + 1).padStart(2, '0')}.</span>{' '}
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm px-4 py-1.5 rounded border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
              >
                resume.pdf
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-primary"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 font-mono text-sm animate-fade-in">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary">{String(i + 1).padStart(2, '0')}.</span>{' '}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}
