'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useExperiences } from '../../api/useExperience'

type Experience = {
  id: number
  positionName: string
  employeeName: string
  dateStarted: string
  dateEnded: string
  description1: string
  description2: string
  description3: string
  imageUrl: string
}

const ExperiencePage = () => {
  const experienceList = useExperiences()
  const [activeIdx, setActiveIdx] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!experienceList.length) return

    const observers: IntersectionObserver[] = []
    cardRefs.current.forEach((card, i) => {
      if (!card) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIdx(i) },
        { threshold: 0.5 }
      )
      obs.observe(card)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [experienceList])

  const active = experienceList[activeIdx]

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
      <h1
        className='mb-10 text-2xl text-center'
        style={{ fontFamily: 'var(--font-mono), monospace' }}
      >
        Work Experience
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12' style={{ alignItems: 'start' }}>
        {/* Left: sticky company panel — desktop only */}
        <div className='hidden md:block' style={{ position: 'sticky', top: '120px', height: 'fit-content' }}>
          {active && (
            <div
              style={{
                background: '#111114',
                border: '1px solid rgba(74,255,139,0.2)',
                borderRadius: '16px',
                padding: '32px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <img
                  src={active.imageUrl}
                  alt={active.employeeName}
                  style={{
                    width: '52px',
                    height: '52px',
                    objectFit: 'contain',
                    borderRadius: '10px',
                    background: '#1e1e22',
                    padding: '6px',
                  }}
                />
                <div>
                  <p style={{ color: '#4aff8b', fontWeight: 600, fontSize: '15px' }}>
                    {active.employeeName}
                  </p>
                  <p style={{
                    color: '#5a5a5e',
                    fontSize: '12px',
                    marginTop: '2px',
                    fontFamily: 'var(--font-mono), monospace',
                  }}>
                    {active.dateStarted} – {active.dateEnded}
                  </p>
                </div>
              </div>

              <p style={{
                color: 'rgba(234,231,226,0.35)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '8px',
                fontFamily: 'var(--font-mono), monospace',
              }}>
                {String(activeIdx + 1).padStart(2, '0')} / {String(experienceList.length).padStart(2, '0')}
              </p>
              <p style={{ color: '#eae7e2', fontWeight: 600, fontSize: '18px', lineHeight: 1.3 }}>
                {active.positionName}
              </p>
            </div>
          )}
        </div>

        {/* Right: scrolling experience cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingTop: '4px' }}>
          {experienceList.map((exp, i) => (
            <div
              key={exp.id}
              ref={(el) => { cardRefs.current[i] = el }}
              style={{
                background: '#111114',
                border: `1px solid ${i === activeIdx ? 'rgba(74,255,139,0.3)' : '#1e1e22'}`,
                borderRadius: '16px',
                padding: '28px',
                opacity: i === activeIdx ? 1 : 0.4,
                transform: i === activeIdx ? 'translateY(0)' : 'translateY(6px)',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                boxShadow: i === activeIdx
                  ? '0 0 0 1px rgba(74,255,139,0.08), 0 12px 40px rgba(74,255,139,0.04)'
                  : 'none',
              }}
            >
              <p style={{
                fontSize: '11px',
                color: '#4aff8b',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '10px',
                fontFamily: 'var(--font-mono), monospace',
              }}>
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 style={{ color: '#eae7e2', fontWeight: 600, fontSize: '18px', marginBottom: '4px' }}>
                {exp.positionName}
              </h3>
              <p style={{ color: '#5a5a5e', fontSize: '13px', marginBottom: '18px' }}>
                {exp.employeeName}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[exp.description1, exp.description2, exp.description3].filter(Boolean).map((desc, j) => (
                  <li key={j} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'rgba(234,231,226,0.75)', lineHeight: 1.55 }}>
                    <span style={{ color: '#4aff8b', flexShrink: 0, marginTop: '2px' }}>▸</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperiencePage
