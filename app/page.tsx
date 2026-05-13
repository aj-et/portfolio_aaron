export const revalidate = 0

import { db } from '@/lib/data'
import { projects as projectsTable } from '@/drizzle/schema'
import Hero from '@/components/Hero'
import {
  AboutPage,
  ExperiencePage,
  ProjectsPage,
  TechsPage,
  ContactMePage,
} from '@/components/pages'

export default async function Home() {
  const projects = await db
    .select()
    .from(projectsTable)
    .then(r => [...r].sort((a, b) => b.id - a.id))

  return (
    <>
      <Hero />
      <AboutPage />
      <ExperiencePage />
      <TechsPage />
      <ProjectsPage projects={projects} />
      <ContactMePage />
    </>
  )
}
