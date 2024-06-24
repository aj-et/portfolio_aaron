'use client'

import Image from "next/image";
import React, { useState, useEffect } from "react";
import ContactMePage from "@/components/pages/ContactMe";
import ProjectsPage from "@/components/pages/Projects";

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
        Home Page
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
