'use client'

import React, { useEffect, useState } from 'react';
import Card_Projects from '@/components/Card_Projects'
import CoverflowCarousel from '@/components/CoverflowCarousel'
import { cachedFetch } from '@/utils/queryCache';

type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  html_link: string;
  github_link: string;
};

const ProjectsPage = () => {
  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {
    cachedFetch<Project>('projects', '/api/projects')
      .then(result => setProjectList([...result].sort((a, b) => b.id - a.id)))
      .catch(console.error)
  }, [])

  return (
    <div className='flex flex-col justify-center'>
      <h1 className='mb-10 text-2xl text-center'>Projects</h1>

      {/* Mobile: carousel */}
      <div className='md:hidden'>
        <CoverflowCarousel projects={projectList} />
      </div>

      {/* Desktop: flex-wrap grid */}
      <div className='hidden md:flex gap-4 flex-wrap justify-center'>
        {projectList.map((project) => (
          <Card_Projects key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
