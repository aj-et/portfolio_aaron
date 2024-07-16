'use client'

import React, { useState, useEffect } from 'react';

const ReCAPTCHALoader = () => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check if consent was previously given
    const storedConsent = localStorage.getItem('reCAPTCHAConsent');
    if (storedConsent === 'true') {
      setConsentGiven(true);
    }
  }, []);

  useEffect(() => {
    if (consentGiven) {
      // Load reCAPTCHA v3 script
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [consentGiven]);

  const handleConsent = () => {
    localStorage.setItem('reCAPTCHAConsent', 'true');
    setConsentGiven(true);
  };

  if (!consentGiven) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-md">
        <p className="mb-2">
          This site uses Google reCAPTCHA to enhance security, which may set cookies. Do you consent to load reCAPTCHA?
        </p>
        <button onClick={handleConsent} className="bg-blue-500 text-white px-4 py-2 rounded">
          I Consent
        </button>
      </div>
    );
  }

  return null; // Render nothing if consent is given
};

export default ReCAPTCHALoader;