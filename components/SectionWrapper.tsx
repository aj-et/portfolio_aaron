'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'
import Reveal from './Reveal'

interface Props {
  num: string
  title: string
  children: ReactNode
  id?: string
}

const SectionWrapper = ({ num, title, children, id }: Props) => {
  const reduce = useReducedMotion()
  return (
    <section id={id} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <Reveal direction="up" className="flex items-center gap-4 mb-12">
          <h2
            data-num={num}
            className="section-heading font-mono text-3xl md:text-4xl font-bold tracking-tight"
          >
            {title}
          </h2>
          <motion.div
            className="hidden sm:block flex-1 h-px bg-gradient-to-r from-border to-transparent origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduce ? 0 : 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          />
        </Reveal>
        <Reveal direction="up" delay={0.1} amount={0.1}>
          {children}
        </Reveal>
      </div>
    </section>
  )
}

export default SectionWrapper
