'use client'

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { 
  ContactMePage,
  ExperiencePage,
  HomePage,
  ProjectsPage,
  TechsPage,
  AboutPage
} from "@/components/pages";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="section">
        <HomePage />
      </div>

      <div id="about" className="section">
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

      <div id="contact" className="section">
        <ContactMePage />
      </div>

      {showButton && (
        <button
          onClick={handleScrollToTop}
          className="scroll-to-top-button"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}
