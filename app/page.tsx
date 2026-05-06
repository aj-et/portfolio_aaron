import Hero from '@/components/Hero'
import {
  AboutPage,
  ExperiencePage,
  ProjectsPage,
  TechsPage,
  ContactMePage,
} from '@/components/pages'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPage />
      <ExperiencePage />
      <TechsPage />
      <ProjectsPage />
      <ContactMePage />
    </>
  )
}
