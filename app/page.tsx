'use client'

import React, { useState, useEffect } from "react";
import { 
  ContactMePage,
  ExperiencePage,
  ProjectsPage,
  TechsPage,
  AboutPage,
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

      <iframe 
        className="spotify"
        title="Spotify Playlist" 
        src={process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_URL}
        width="75%" 
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      >  
      </iframe>

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
