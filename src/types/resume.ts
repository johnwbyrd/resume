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
  startDate: string; // YYYY-MM format
  endDate: string | "present";
  description: string;
}

export interface HeaderProps {
  personalInfo: PersonalInfo;
}

export interface ExperienceProps {
  jobs: Experience[];
}

export interface ExperienceEntryProps {
  job: Experience;
}

export interface SkillsProps {
  items: string[];
}

export type SortDirection = "asc" | "desc";
export type SortField = "startDate" | "endDate";

export interface SortOption {
  field: SortField;
  direction: SortDirection;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  skills: string[];
  experience: Experience[];
  academic: {
    text: string;
    links: {
      text: string;
      url: string;
    }[];
  }[];
}
