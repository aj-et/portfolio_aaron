

import React from 'react'
// import Card_Experiences from '../Card_Experiences'
import { useExperiences } from '../api/useExperience'
import Card_Experiences from '../Card_Experiences'
import 'react-vertical-timeline-component/style.min.css'
import dynamic from 'next/dynamic'

const ClientSideTimeline = dynamic(
  () => import('react-vertical-timeline-component').then((mod) => mod.VerticalTimeline),
  { ssr: false }
)

type Experience = {
  id: number;
  positionName: string;
  employeeName: string;
  dateStarted: string;
  dateEnded: string;
  description1: string;
  description2: string;
  description3: string;
  imageUrl: string;
};

const ExperiencePage = () => {
  const experienceList = useExperiences();

  return (
    <div className=''>
      <h1 className='mb-10 text-2xl text-center'>Work Experience</h1>
      <ClientSideTimeline lineColor='#000'>
        {experienceList.map((experience) => (
          <Card_Experiences key={experience.id} experience={experience} />
        ))}
      </ClientSideTimeline>
    </div>
  )
}

export default ExperiencePage