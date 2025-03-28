import { loadResumeData } from '@/utils/loadResumeData';
import { 
  PersonalInfo,
  WorkExperience,
  Education,
  Skills,
  Projects,
  Volunteer
} from '@/components/sections';

export function Resume() {
  const resumeData = loadResumeData();
  
  return (
    <div className="resume">
      <PersonalInfo resumeData={resumeData} />
      <WorkExperience resumeData={resumeData} />
      <Skills resumeData={resumeData} />
      <Education resumeData={resumeData} />
      <Projects resumeData={resumeData} />
      <Volunteer resumeData={resumeData} />
    </div>
  );
} 