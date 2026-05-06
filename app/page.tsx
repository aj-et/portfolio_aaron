'use client'

import React from "react";
import {
  ContactMePage,
  ExperiencePage,
  ProjectsPage,
  TechsPage,
  AboutPage,
} from "@/components/pages";

export default function Home() {
  return (
    <div className="relative">

      <div id="about" className="section h-screen">
        <AboutPage />
      </div>

      <div id="experience" className="section">
        <ExperiencePage />
      </div>

      <div id="tech" className="section">
        <TechsPage />
      </div>

      <div id="project" className="section">
        <ProjectsPage />
      </div>

      <div id="contact" className="section h-screen">
        <ContactMePage />
      </div>

    </div>
  );
}
