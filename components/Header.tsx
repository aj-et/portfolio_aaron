'use client'

import React from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'project', label: 'Projects' },
  { id: 'contact', label: 'Contact Me' },
]

export const Header = () => {
  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='flex flex-col md:flex-row justify-between mb-20'>
      <Link
        href={'/'}
        style={{
          fontFamily: 'var(--font-mono), monospace',
          color: '#4aff8b',
          fontWeight: 700,
          fontSize: '18px',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        &lt;/ Aaron &gt;
      </Link>

      <div className='hidden md:flex items-center space-x-6'>
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleSmoothScroll(id)}
            style={{
              color: 'rgba(234,231,226,0.55)',
              fontSize: '13px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s',
              fontFamily: 'var(--font-mono), monospace',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#4aff8b')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(234,231,226,0.55)')}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
