'use client'

import React from 'react'
import { useExperiences } from '../../api/useExperience'

const ExperiencePage = () => {
  const experienceList = useExperiences()

  return (
    <div style={{ width: '100%', maxWidth: '640px', margin: '0 auto', padding: '0 24px' }}>
      <h1
        className='mb-10 text-2xl text-center'
        style={{ fontFamily: 'var(--font-mono), monospace' }}
      >
        Work Experience
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {experienceList.map((exp) => (
          <div
            key={exp.id}
            style={{
              background: '#111114',
              border: '1px solid #1e1e22',
              borderRadius: '16px',
              padding: '28px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src={exp.imageUrl}
                alt={exp.employeeName}
                style={{
                  width: '48px',
                  height: '48px',
                  objectFit: 'contain',
                  borderRadius: '50%',
                  background: '#1e1e22',
                  padding: '6px',
                  flexShrink: 0,
                }}
              />
              <div>
                <p style={{ color: '#4aff8b', fontWeight: 600, fontSize: '15px' }}>
                  {exp.employeeName}
                </p>
                <p style={{
                  color: '#5a5a5e',
                  fontSize: '12px',
                  marginTop: '2px',
                  fontFamily: 'var(--font-mono), monospace',
                }}>
                  {exp.dateStarted} – {exp.dateEnded}
                </p>
              </div>
            </div>

            <h3 style={{ color: '#eae7e2', fontWeight: 600, fontSize: '18px', marginBottom: '16px' }}>
              {exp.positionName}
            </h3>

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
  )
}

export default ExperiencePage
