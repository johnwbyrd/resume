import { createContext, useContext, ReactNode } from 'react';
import resumeData from './resume.json';

// Define resume structure (simplified for clarity)
interface ResumeData {
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
  // Add other resume sections as needed
}

interface ResumeContextType {
  resume: ResumeData;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: ReactNode }) {
  return (
    <ResumeContext.Provider value={{ resume: resumeData }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  
  return context;
} 