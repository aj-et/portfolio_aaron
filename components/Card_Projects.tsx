'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

const GithubIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

type Project = {
  id: number
  name: string
  description: string
  image: string
  html_link: string
  github_link: string
  language?: string | null
  languageColor?: string | null
  tags?: string | null
}

const Card_Projects = ({ project }: { project: Project }) => (
  <div
    className="group relative rounded-lg h-full transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
    style={{ padding: '1.5px', background: 'hsl(var(--border))' }}
  >
    {/* Gradient layer — sits behind the article, only the 1.5px wrapper padding exposes it */}
    <div
      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{
        background: 'linear-gradient(270deg, hsl(142,90%,55%), hsl(180,95%,55%), hsl(265,90%,70%), hsl(142,90%,55%))',
        backgroundSize: '300% 100%',
        animation: 'gradientBorder 3s linear infinite',
      }}
    />

    {/* Solid background so the gradient only shows through the 1.5px padding strip */}
    <article
      className="relative rounded-[calc(var(--radius)-1.5px)] overflow-hidden flex flex-col h-full"
      style={{ background: 'hsl(222 40% 8%)', zIndex: 1 }}
    >
      {/* Project image */}
      <div className="relative w-full h-40 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover opacity-50 group-hover:opacity-70 transition-opacity"
          sizes="(max-width: 768px) 280px, 400px"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Icons row */}
        <div className="flex items-center justify-end mb-4">
          <div className="flex gap-3">
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GithubIcon size={17} />
              </a>
            )}
            {project.html_link && (
              <a
                href={project.html_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>

        <h3 className="font-mono font-semibold text-primary mb-2">
          {project.name}
        </h3>

        {project.tags && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.split(',').map(tag => (
              <span
                key={tag.trim()}
                className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                #{tag.trim()}
              </span>
            ))}
          </div>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
          {project.description}
        </p>

        {project.language && (
          <div className="flex items-center gap-1.5 mt-auto pt-3">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ background: project.languageColor ?? '#888' }}
            />
            <span className="font-mono text-xs text-muted-foreground">{project.language}</span>
          </div>
        )}
      </div>
    </article>
  </div>
)

export default Card_Projects
