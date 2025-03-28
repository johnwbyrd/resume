import 'server-only';
import resumeData from '@/data/resume.json';

// Import resume schema type for proper typing
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
  skills?: Array<{
    name?: string;
    keywords?: string[];
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
  // Direct JSON import instead of filesystem operations
  return resumeData;
} 