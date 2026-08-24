import { resume as resumeData } from '@/utils/loadResumeData';
import { Basics, Skills, Work, Projects, Academic } from '@/components/sections';

export function Resume() {
  return (
    <div className="resume">
      <Basics resumeData={resumeData} />
      <div className="resume-body">
        <Skills resumeData={resumeData} />
        <Work resumeData={resumeData} />
        <Projects resumeData={resumeData} />
        <Academic resumeData={resumeData} />
      </div>
    </div>
  );
}
