import fs from 'fs';
import path from 'path';

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
  // Load resume data from the JSON file
  const filePath = path.join(process.cwd(), 'src', 'data', 'resume.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  
  return data;
} 