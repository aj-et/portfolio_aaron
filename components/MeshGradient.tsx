'use client'

import { useEffect, useRef } from 'react'

/** Animated matrix-style background canvas — subtle, low opacity. */
export const MeshGradient = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId = 0
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]<>/\\=+*-_$;:'.split('')
    let columns = 0
    let drops: number[] = []

    const setup = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const fontSize = 14
      columns = Math.floor(canvas.width / fontSize)
      drops = Array(columns).fill(1)
    }
    setup()
    window.addEventListener('resize', setup)

    const fontSize = 14
    let last = 0
    const draw = (time: number) => {
      if (time - last > 60) {
        last = time
        ctx.fillStyle = 'rgba(8, 12, 16, 0.08)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'rgba(60, 240, 140, 0.55)'
        ctx.font = `${fontSize}px JetBrains Mono, monospace`

        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)]
          ctx.fillText(text, i * fontSize, drops[i] * fontSize)
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }
          drops[i]++
        }
      }
      animationId = requestAnimationFrame(draw)
    }
    animationId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', setup)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none opacity-[0.18]"
    />
  )
}
