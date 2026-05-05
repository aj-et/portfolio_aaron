'use client'

import { useEffect, useRef } from 'react'

export const MeshGradient = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const colors = [
      'rgba(74, 255, 139, 0.12)',
      'rgba(56, 189, 248, 0.10)',
      'rgba(139, 92, 246, 0.10)',
      'rgba(20, 184, 166, 0.08)',
    ]

    const blobs = colors.map((color) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: 0.3 + Math.random() * 0.2,
      color,
    }))

    let animId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.fillStyle = '#0a0a0b'
      ctx.fillRect(0, 0, w, h)

      blobs.forEach((b) => {
        b.x += b.vx / w
        b.y += b.vy / h
        if (b.x < -0.2 || b.x > 1.2) b.vx *= -1
        if (b.y < -0.2 || b.y > 1.2) b.vy *= -1

        const grd = ctx.createRadialGradient(
          b.x * w, b.y * h, 0,
          b.x * w, b.y * h, b.r * Math.max(w, h)
        )
        grd.addColorStop(0, b.color)
        grd.addColorStop(1, 'transparent')
        ctx.globalCompositeOperation = 'lighter'
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, w, h)
        ctx.globalCompositeOperation = 'source-over'
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  )
}
