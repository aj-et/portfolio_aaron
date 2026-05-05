'use client'

import React, { useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'

function scrambleText(
  el: HTMLElement,
  finalText: string,
  duration: number,
  onDone?: () => void
) {
  const len = finalText.length
  let startTime: number | null = null

  const frame = (ts: number) => {
    if (!startTime) startTime = ts
    const elapsed = ts - startTime
    const progress = Math.min(elapsed / duration, 1)

    let html = ''
    for (let i = 0; i < len; i++) {
      if (finalText[i] === ' ') { html += ' '; continue }
      const threshold = (i / len) * 0.7 + 0.15
      if (progress >= threshold) {
        html += `<span style="color:#4aff8b">${finalText[i]}</span>`
      } else {
        html += `<span style="color:#5a5a5e">${CHARS[Math.floor(Math.random() * CHARS.length)]}</span>`
      }
    }
    el.innerHTML = html

    if (progress < 1) {
      requestAnimationFrame(frame)
    } else {
      el.innerHTML = finalText
      onDone?.()
    }
  }
  requestAnimationFrame(frame)
}

const AboutPage = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paraRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const heading = headingRef.current
    const para = paraRef.current
    if (!heading || !para) return

    para.style.opacity = '0'
    para.style.transform = 'translateY(12px)'

    scrambleText(heading, 'About Me', 1200, () => {
      para.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      para.style.opacity = '1'
      para.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <div className='flex flex-col justify-center'>
      <h1
        ref={headingRef}
        className='mb-10 text-2xl text-center'
        style={{ fontFamily: 'var(--font-mono), monospace', minHeight: '1.5em' }}
      >
        About Me
      </h1>
      <p
        ref={paraRef}
        className='text-center md:w-[50%] mx-auto'
        style={{ color: 'rgba(234,231,226,0.75)', lineHeight: 1.7 }}
      >
        Hi, I&apos;m Aaron! I have a deep passion for software development, where I love the
        challenge of turning ideas into functional applications. My curiosity drives me to explore
        new technologies and methodologies, constantly seeking to learn and innovate. I thrive on
        problem-solving and enjoy diving into the latest trends in the tech world. Always eager to
        expand my knowledge, I embrace every opportunity to grow in this ever-evolving field.
      </p>
      <div className='flex gap-4 flex-wrap justify-center' />
    </div>
  )
}

export default AboutPage
