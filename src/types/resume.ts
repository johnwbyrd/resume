// src/types/resume.ts
export interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  web: string;
}

export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string; // YYYY-MM
  endDate: string | "present";
  description: string;
}

export interface AcademicEntry {
  text: string;
  links: Array<{
    text: string;
    url: string;
  }>;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  skills: string[];
  experience: Experience[];
  academic: AcademicEntry[];
}
