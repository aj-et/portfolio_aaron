'use client'

import { useEffect, useState } from 'react'
import { cachedFetch } from '@/utils/queryCache'
import SectionWrapper from '@/components/SectionWrapper'
import Card_Projects from '@/components/Card_Projects'
import CoverflowCarousel from '@/components/CoverflowCarousel'
import { Stagger, StaggerItem } from '@/components/Reveal'

type Project = {
  id: number
  name: string
  description: string
  image: string
  html_link: string
  github_link: string
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    cachedFetch<Project>('projects', '/api/projects')
      .then(r => setProjects([...r].sort((a, b) => b.id - a.id)))
      .catch(console.error)
  }, [])

  return (
    <SectionWrapper id="projects" num="04" title="things_I've_built">
      <p className="text-muted-foreground mb-10 font-mono text-sm">
        <span className="text-primary">$</span> ls ~/projects | head -{projects.length || 12}
      </p>

      {/* Mobile carousel */}
      <div className="md:hidden">
        <CoverflowCarousel projects={projects} />
      </div>

      {/* Desktop stagger grid */}
      <Stagger
        className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        stagger={0.06}
        amount={0.05}
      >
        {projects.map(p => (
          <StaggerItem key={p.id} as="div">
            <Card_Projects project={p} />
          </StaggerItem>
        ))}
      </Stagger>
    </SectionWrapper>
  )
}

export default ProjectsPage
