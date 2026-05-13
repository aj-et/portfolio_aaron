'use client'

import { useState } from 'react'
import SectionWrapper from '@/components/SectionWrapper'
import Card_Projects from '@/components/Card_Projects'
import CoverflowCarousel from '@/components/CoverflowCarousel'

type Project = {
  id: number
  name: string
  description: string
  image: string
  html_link: string
  github_link: string
}

const PER_PAGE = 6

const ProjectsPage = ({ projects }: { projects: Project[] }) => {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(projects.length / PER_PAGE)
  const pageProjects = projects.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <SectionWrapper id="projects" num="04" title="things_I've_built">
      <p className="text-muted-foreground mb-10 font-mono text-sm">
        <span className="text-primary">$</span> ls ~/projects | head -{projects.length || 12}
      </p>

      {/* Mobile carousel — all projects, handled by swipe nav */}
      <div className="md:hidden">
        <CoverflowCarousel projects={projects} />
      </div>

      {/* Desktop paginated grid */}
      <div
        className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        style={{ minHeight: '760px', alignContent: 'start' }}
      >
        {pageProjects.map((p, i) => (
          <div
            key={`${page}-${p.id}`}
            style={{
              minHeight: '360px',
              animation: `fade-in 0.4s ease ${i * 0.06}s both`,
            }}
          >
            <Card_Projects project={p} />
          </div>
        ))}
      </div>

      {/* Pagination controls — desktop only */}
      {totalPages > 1 && (
        <div
          className="hidden md:flex"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            marginTop: '40px',
          }}
        >
          <button
            onClick={() => setPage(p => p - 1)}
            disabled={page === 1}
            style={{
              padding: '8px 20px',
              borderRadius: '8px',
              border: '1px solid #1e1e22',
              background: 'transparent',
              color: page === 1 ? '#3a3a3e' : '#eae7e2',
              fontFamily: 'monospace',
              fontSize: '13px',
              cursor: page === 1 ? 'default' : 'pointer',
              transition: 'border-color 0.2s, color 0.2s',
            }}
          >
            ← Prev
          </button>

          <span
            style={{
              fontFamily: 'monospace',
              fontSize: '13px',
              color: '#5a5a5e',
              minWidth: '80px',
              textAlign: 'center',
            }}
          >
            <span style={{ color: '#4aff8b' }}>{page}</span> / {totalPages}
          </span>

          <button
            onClick={() => setPage(p => p + 1)}
            disabled={page === totalPages}
            style={{
              padding: '8px 20px',
              borderRadius: '8px',
              border: '1px solid #1e1e22',
              background: 'transparent',
              color: page === totalPages ? '#3a3a3e' : '#eae7e2',
              fontFamily: 'monospace',
              fontSize: '13px',
              cursor: page === totalPages ? 'default' : 'pointer',
              transition: 'border-color 0.2s, color 0.2s',
            }}
          >
            Next →
          </button>
        </div>
      )}
    </SectionWrapper>
  )
}

export default ProjectsPage
