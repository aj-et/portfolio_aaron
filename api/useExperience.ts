'use client'

// useExperiences.ts
import { useState, useEffect } from 'react';
import { experiences } from '@/drizzle/schema';
import { useCachedQuery } from '@/utils/queryCache';

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
        const result = await useCachedQuery<Experience>('experiences', experiences);
        setExperienceList(result);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };
    fetchExperiences();
  }, []);

  return experienceList;
};