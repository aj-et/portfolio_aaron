import React from 'react'
import Card_Projects from '@/components/Card_Projects'

const ProjectsPage = () => {
  return (
    <div className='flex flex-col justify-center mb-[50px]'>
      <h1 className='mb-10 text-2xl text-center'>Projects</h1>
      <div className='flex gap-4 flex-wrap justify-center'>
        <Card_Projects />
        <Card_Projects />
        <Card_Projects />
        <Card_Projects />
        <Card_Projects />
        <Card_Projects />
        <Card_Projects />
        <Card_Projects />
      </div>
    </div>
  )
}

export default ProjectsPage