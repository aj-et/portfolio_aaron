'use client'

import { useState } from 'react'
import { useExperiences } from '../../hooks/useExperience'
import SectionWrapper from '@/components/SectionWrapper'

const ExperiencePage = () => {
  const jobs = useExperiences()
  const [active, setActive] = useState(0)
  const job = jobs[active]

  if (!job) {
    return (
      <SectionWrapper id="experience" num="02" title="where_I've_worked">
        <p className="text-muted-foreground font-mono text-sm">Loading...</p>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper id="experience" num="02" title="where_I've_worked">
      <div className="grid md:grid-cols-[200px_1fr] gap-8">
        {/* Tabs */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
          {jobs.map((j, i) => (
            <button
              key={j.id}
              onClick={() => setActive(i)}
              className={`whitespace-nowrap text-left px-4 py-3 font-mono text-sm transition-all border-b-2 md:border-b-0 md:border-l-2 -mb-px md:-ml-px ${
                active === i
                  ? 'border-primary text-primary bg-primary/5'
                  : 'border-transparent text-muted-foreground hover:text-primary hover:bg-primary/5'
              }`}
            >
              {j.employeeName.length > 16 ? j.employeeName.slice(0, 14) + '…' : j.employeeName}
            </button>
          ))}
        </div>

        {/* Detail */}
        <div key={active} className="animate-fade-in-left">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={job.imageUrl}
              alt={job.employeeName}
              className="w-10 h-10 rounded-md object-contain bg-muted p-1.5 shrink-0"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                {job.positionName}{' '}
                <span className="text-primary">@ {job.employeeName}</span>
              </h3>
              <p className="font-mono text-sm text-muted-foreground mt-0.5">
                {job.dateStarted} – {job.dateEnded}
              </p>
            </div>
          </div>

          <ul className="space-y-3 mt-5">
            {[job.description1, job.description2, job.description3].filter(Boolean).map((b, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                <span className="text-primary font-mono mt-1">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ExperiencePage
