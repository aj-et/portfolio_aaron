'use client'

import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { Stagger, StaggerItem } from './Reveal'
import { technologies } from './const'

type Tech = { name: string; image: string | StaticImageData }

const ShowcasePage = () => (
  <div className="w-full">
    {/* Marquee */}
    <div
      className="relative overflow-hidden mb-10"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div className="flex gap-4 animate-marquee w-max">
        {[...technologies, ...technologies].map((t: Tech, i) => (
          <span
            key={i}
            className="glass px-5 py-2.5 rounded-full font-mono text-sm whitespace-nowrap text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors flex items-center gap-2"
          >
            <Image
              src={t.image}
              alt={t.name}
              width={16}
              height={16}
              className="object-contain"
            />
            {t.name}
          </span>
        ))}
      </div>
    </div>

    {/* Static grid with icons */}
    <Stagger
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3"
      stagger={0.03}
      amount={0.05}
    >
      {technologies.map((t: Tech) => (
        <StaggerItem
          key={t.name}
          className="glass glow-border rounded-md px-3 py-3 text-center font-mono text-xs text-muted-foreground hover:text-primary transition-colors cursor-default flex flex-col items-center gap-2"
        >
          <Image
            src={t.image}
            alt={t.name}
            width={24}
            height={24}
            className="object-contain"
          />
          {t.name}
        </StaggerItem>
      ))}
    </Stagger>
  </div>
)

export default ShowcasePage
