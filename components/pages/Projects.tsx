'use client'

import React, { useEffect, useState } from 'react';
import Card_Projects from '@/components/Card_Projects'
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { projects } from '@/drizzle/schema';

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
    const fetchProjects = async () => {
      const sql = neon(process.env.NEXT_PUBLIC_POSTGRES_URL_NON_POOLING!);
      const db = drizzle(sql);
      const result = await db.select().from(projects);
      setProjectList(result);
    };
    fetchProjects();
  }, [])

  return (
    <div className='flex flex-col justify-center'>
      <h1 className='mb-10 text-2xl text-center'>Projects</h1>
      <div className='flex gap-4 flex-wrap justify-center'>
        {projectList.map((project) => (
          <Card_Projects key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage