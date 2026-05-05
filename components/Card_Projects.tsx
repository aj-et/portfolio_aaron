'use client'

import { useState } from 'react'
import Image from 'next/image'

type Project = {
  id: number
  name: string
  description: string
  image: string
  html_link: string
  github_link: string
}

const Card_Projects = ({ project }: { project: Project }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      style={{ perspective: '800px', height: '320px', width: '280px', cursor: 'pointer', flexShrink: 0 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: '20px',
            overflow: 'hidden',
            background: '#111114',
            border: '1px solid #1e1e22',
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '65%' }}>
            <Image
              src={project.image}
              alt={project.name}
              fill
              style={{ objectFit: 'cover', opacity: 0.8 }}
              sizes="280px"
              loading="lazy"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 40%, #111114 100%)',
              }}
            />
          </div>
          <div style={{ padding: '14px 20px' }}>
            <h3 style={{ color: '#eae7e2', fontWeight: 600, fontSize: '16px', marginBottom: '4px' }}>
              {project.name}
            </h3>
            <p style={{ color: '#5a5a5e', fontSize: '12px', letterSpacing: '0.04em' }}>
              Hover to see details
            </p>
          </div>
        </div>

        {/* Back */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '20px',
            background: '#0d1a0f',
            border: '1px solid rgba(74,255,139,0.25)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h3 style={{ color: '#4aff8b', fontWeight: 600, fontSize: '17px', marginBottom: '10px' }}>
              {project.name}
            </h3>
            <p style={{ color: 'rgba(234,231,226,0.8)', fontSize: '13px', lineHeight: 1.65 }}>
              {project.description}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href={project.html_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                color: '#4aff8b',
                fontSize: '13px',
                textDecoration: 'none',
                border: '1px solid rgba(74,255,139,0.35)',
                padding: '6px 14px',
                borderRadius: '8px',
                fontWeight: 500,
              }}
            >
              Live ↗
            </a>
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                color: '#eae7e2',
                fontSize: '13px',
                textDecoration: 'none',
                border: '1px solid #1e1e22',
                padding: '6px 14px',
                borderRadius: '8px',
                fontWeight: 500,
              }}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card_Projects
