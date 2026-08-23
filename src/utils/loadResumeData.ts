import resumeData from '@/data/resume.json';

export interface ResumeData {
  basics?: {
    name?: string;
    label?: string;
    email?: string;
    url?: string;
    location?: {
      city?: string;
      countryCode?: string;
      region?: string;
    };
    profiles?: Array<{
      network?: string;
      url?: string;
      username?: string;
    }>;
    summary?: string;
    highlights?: string[];
  };
  work?: Array<{
    name?: string;
    position?: string;
    url?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    summary?: string;
    highlights?: string[];
  }>;
  education?: Array<{
    institution?: string;
    url?: string;
    area?: string;
    studyType?: string;
  }>;
  projects?: Array<{
    name?: string;
    description?: string;
    url?: string;
  }>;
  volunteer?: Array<{
    organization?: string;
    position?: string;
    summary?: string;
    url?: string;
    highlights?: string[];
  }>;
}

export function loadResumeData(): ResumeData {
  return resumeData as ResumeData;
}
