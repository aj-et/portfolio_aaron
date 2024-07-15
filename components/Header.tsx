'use client'

import React from 'react'
import Link from 'next/link'

export const Header = () => {
  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-col md:flex-row justify-between mb-20 text-lg'>
      <div className='icon'>
        <Link href={'/'}>&lt;/ Aaron &gt;</Link>
      </div>

      <div className='hidden md:flex space-x-4'>
        <button onClick={() => handleSmoothScroll('about')}>About</button>
        <button onClick={() => handleSmoothScroll('experience')}>Experience</button>
        <button onClick={() => handleSmoothScroll('tech')}>Tech</button>
        <button onClick={() => handleSmoothScroll('project')}>Projects</button>
        <button onClick={() => handleSmoothScroll('contact')}>Contact Me</button>
      </div>
    </div>
  )
}
