'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'
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
        border: `1px solid ${hovered ? 'rgba(74,255,139,0.25)' : '#1e1e22'}`,
        borderRadius: '14px',
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        cursor: 'default',
        transition: 'border-color 0.3s',
        aspectRatio: '1',
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
        }}
      />
      <Image
        src={image}
        alt={name}
        width={48}
        height={48}
        loading='lazy'
        style={{ objectFit: 'contain', position: 'relative', zIndex: 1 }}
      />
      <span style={{ fontSize: '11px', color: 'rgba(234,231,226,0.55)', letterSpacing: '0.05em', position: 'relative', zIndex: 1 }}>
        {name}
      </span>
    </div>
  )
}

const ShowcasePage = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
      <Carousel
        plugins={[
          AutoScroll({
            speed: 1.5,
            stopOnInteraction: false,
          })
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-full'
      >
        <CarouselContent>
          {technologies.map((tech, index) => (
            <CarouselItem key={index} className='basis-[160px] shrink-0'>
              <div className='p-1'>
                <SpotlightCard name={tech.name} image={tech.image} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default ShowcasePage
