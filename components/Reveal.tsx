'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  distance?: number
  className?: string
  once?: boolean
  amount?: number
  as?: 'div' | 'span' | 'li' | 'article' | 'section'
}

const offsetFor = (dir: Direction, d: number) => {
  switch (dir) {
    case 'up':    return { y: d }
    case 'down':  return { y: -d }
    case 'left':  return { x: d }
    case 'right': return { x: -d }
    default:      return {}
  }
}

const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 24,
  className,
  once = true,
  amount = 0.2,
  as = 'div',
}: RevealProps) => {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  const variants: Variants = {
    hidden: { opacity: 0, ...(reduce ? {} : offsetFor(direction, distance)) },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal

interface StaggerProps {
  children: ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
  once?: boolean
  amount?: number
}

export const Stagger = ({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
  once = true,
  amount = 0.2,
}: StaggerProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once, amount }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: stagger, delayChildren } },
    }}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({
  children,
  className,
  distance = 20,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  distance?: number
  as?: 'div' | 'li' | 'span' | 'article'
}) => {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : distance },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </MotionTag>
  )
}
