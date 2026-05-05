'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { technologies } from './const'

type Tech = { name: string; image: string | StaticImageData }

const SpotlightCard = ({ name, image }: Tech) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [pos, setPos] = useState({ x: '50%', y: '50%' })

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    setPos({ x: `${e.clientX - rect.left}px`, y: `${e.clientY - rect.top}px` })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#111114',
        border: '1px solid #1e1e22',
        borderRadius: '14px',
        padding: '20px 12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        cursor: 'default',
        transition: 'border-color 0.3s',
        borderColor: hovered ? 'rgba(74,255,139,0.25)' : '#1e1e22',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle 130px at ${pos.x} ${pos.y}, rgba(255,255,255,0.055), transparent)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
          pointerEvents: 'none',
          borderRadius: '14px',
        }}
      />
      <Image
        src={image}
        alt={name}
        width={44}
        height={44}
        loading='lazy'
        style={{ objectFit: 'contain' }}
      />
      <span style={{ fontSize: '11px', color: 'rgba(234,231,226,0.55)', letterSpacing: '0.05em' }}>
        {name}
      </span>
    </div>
  )
}

const ShowcasePage = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
        gap: '8px',
        maxWidth: '580px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      {technologies.map((tech, index) => (
        <SpotlightCard key={index} name={tech.name} image={tech.image} />
      ))}
    </div>
  )
}

export default ShowcasePage
