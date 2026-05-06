'use client'

import { useState, useEffect } from 'react';
import { cachedFetch } from '@/utils/queryCache';

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

const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
}

function parseMonthYear(str: string): number {
  const [month, year] = str.trim().split(' ')
  const m = MONTHS[month]
  const y = parseInt(year, 10)
  if (m === undefined || isNaN(y)) return 0
  return y * 12 + m
}

export const useExperiences = () => {
  const [experienceList, setExperienceList] = useState<Experience[]>([]);

  useEffect(() => {
    cachedFetch<Experience>('experiences', '/api/experiences')
      .then(result => {
        const sorted = [...result].sort(
          (a, b) => parseMonthYear(b.dateStarted) - parseMonthYear(a.dateStarted)
        )
        setExperienceList(sorted)
      })
      .catch(err => console.error('Error fetching experiences:', err))
  }, []);

  return experienceList;
};
