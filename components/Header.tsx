'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'project', label: 'Projects' },
  { id: 'contact', label: 'Contact Me' },
]

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      style={{
        position: 'relative',
        padding: '16px 20px',
        background: scrolled ? 'rgba(9,9,11,0.5)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      {/* top bar */}
      <div className='flex flex-row justify-between items-center'>
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

        {/* desktop nav */}
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

        {/* hamburger button */}
        <button
          className='md:hidden'
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            background: 'none',
            border: 'none',
            color: '#eae7e2',
            fontSize: '22px',
            cursor: 'pointer',
            lineHeight: 1,
            padding: '4px',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* mobile dropdown */}
      {menuOpen && (
        <div
          className='md:hidden'
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(9,9,11,0.95)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid #1e1e22',
            padding: '12px 0',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 50,
          }}
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                handleSmoothScroll(id)
                setMenuOpen(false)
              }}
              style={{
                color: 'rgba(234,231,226,0.55)',
                fontSize: '13px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono), monospace',
                padding: '14px 24px',
                textAlign: 'left',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#4aff8b')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(234,231,226,0.55)')}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
