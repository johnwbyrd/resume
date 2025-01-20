// src/types/resume.ts

/**
 * Basic personal information displayed in the header
 */
export interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  web: string;
}

/**
 * Single job experience entry
 */
export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string; // YYYY-MM format
  endDate: string | "present";
  description: string;
}

/**
 * Link within an academic entry
 */
export interface AcademicLink {
  text: string;
  url: string;
}

/**
 * Academic achievement or credential
 */
export interface AcademicEntry {
  text: string;
  links: AcademicLink[];
}

/**
 * Full resume data structure
 */
export interface ResumeData {
  personalInfo: PersonalInfo;
  skills: string[];
  experience: Experience[];
  academic: AcademicEntry[];
}

/**
 * Props interface for the Header component
 */
export interface HeaderProps {
  personalInfo: PersonalInfo;
}

/**
 * Props interface for the Experience component
 */
export interface ExperienceProps {
  jobs: Experience[];
}

/**
 * Props interface for the Skills component
 */
export interface SkillsProps {
  items: string[];
}

/**
 * Props interface for the Academic component
 */
export interface AcademicProps {
  data: AcademicEntry[];
}

/**
 * Props interface for the ResumeLayout
 */
export interface ResumeLayoutProps {
  resume: ResumeData;
}
