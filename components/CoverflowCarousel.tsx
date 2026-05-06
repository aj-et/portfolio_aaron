'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

type Project = {
  id: number
  name: string
  description: string
  image: string
  html_link: string
  github_link: string
}

export default function CoverflowCarousel({ projects }: { projects: Project[] }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [animKey, setAnimKey] = useState(0)
  const touchStartX = useRef<number | null>(null)

  function move(dir: number) {
    const next = Math.max(0, Math.min(projects.length - 1, current + dir))
    if (next === current) return
    setDirection(dir as 1 | -1)
    setAnimKey(k => k + 1)
    setCurrent(next)
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 50) move(delta > 0 ? 1 : -1)
    touchStartX.current = null
  }

  const project = projects[current]
  if (!project) return null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* card */}
      <div
        key={animKey}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          width: '280px',
          minHeight: '380px',
          borderRadius: '21px',
          padding: '1.5px',
          background: 'linear-gradient(90deg, #c8a97e, #5eadb5, #a8748e, #e85d3a, #4f46e5, #c8a97e)',
          backgroundSize: '300% 100%',
          animation: `gradientBorder 6s linear infinite, ${direction === 1 ? 'slideInRight' : 'slideInLeft'} 0.35s ease`,
        }}
      >
        <div
          style={{
            borderRadius: '20px',
            overflow: 'hidden',
            background: '#111114',
            minHeight: '378px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '180px', flexShrink: 0 }}>
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

          <div
            style={{
              padding: '16px 20px 20px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3
              style={{
                color: '#eae7e2',
                fontWeight: 600,
                fontSize: '16px',
                marginBottom: '8px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {project.name}
            </h3>
            <p
              style={{
                color: '#5a5a5e',
                fontSize: '13px',
                lineHeight: 1.6,
                marginBottom: '16px',
                flex: 1,
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
              }}
            >
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

      {/* nav */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button
          onClick={() => move(-1)}
          disabled={current === 0}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid #1e1e22',
            background: 'transparent',
            color: current === 0 ? '#3a3a3e' : '#eae7e2',
            fontSize: '18px',
            cursor: current === 0 ? 'default' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ‹
        </button>
        <span style={{ color: '#5a5a5e', fontSize: '12px', minWidth: '48px', textAlign: 'center' }}>
          {current + 1} / {projects.length}
        </span>
        <button
          onClick={() => move(1)}
          disabled={current === projects.length - 1}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid #1e1e22',
            background: 'transparent',
            color: current === projects.length - 1 ? '#3a3a3e' : '#eae7e2',
            fontSize: '18px',
            cursor: current === projects.length - 1 ? 'default' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ›
        </button>
      </div>
    </div>
  )
}
