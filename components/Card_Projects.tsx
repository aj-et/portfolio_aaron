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
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x, y })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
  }

  const isActive = tilt.x !== 0 || tilt.y !== 0

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '280px',
        minHeight: '380px',
        flexShrink: 0,
        borderRadius: '21px',
        padding: '1.5px',
        background: 'linear-gradient(90deg, #c8a97e, #5eadb5, #a8748e, #e85d3a, #4f46e5, #c8a97e)',
        backgroundSize: '300% 100%',
        animation: 'gradientBorder 6s linear infinite',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease-out',
        willChange: 'transform',
        transform: `perspective(600px) rotateY(${tilt.x * 12}deg) rotateX(${-tilt.y * 12}deg) scale(${isActive ? 1.02 : 1})`,
      }}
    >
      <div
        style={{
          borderRadius: '20px',
          overflow: 'hidden',
          background: '#111114',
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
<div style={{ position: 'relative', width: '100%', height: '180px' }}>
          <Image
            src={project.image}
            alt={project.name}
            fill
            style={{ objectFit: 'cover', opacity: 0.85 }}
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

        <div style={{ padding: '16px 20px 20px', position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ color: '#eae7e2', fontWeight: 600, fontSize: '16px', marginBottom: '8px' }}>
            {project.name}
          </h3>
          <p style={{ color: '#5a5a5e', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {project.html_link && (
              <a
                href={project.html_link}
                target="_blank"
                rel="noopener noreferrer"
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
            )}
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card_Projects
