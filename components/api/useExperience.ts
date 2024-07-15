'use client'

// useExperiences.ts
import { useState, useEffect } from 'react';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { experiences } from '@/drizzle/schema';

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

export const useExperiences = () => {
  const [experienceList, setExperienceList] = useState<Experience[]>([]);
  
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const sql = neon(process.env.NEXT_PUBLIC_POSTGRES_URL_NON_POOLING!);
        const db = drizzle(sql);
        const result = await db.select().from(experiences);
        console.log("Fetched experiences:", result);
        setExperienceList(result);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };
    fetchExperiences();
  }, []);

  return experienceList;
};