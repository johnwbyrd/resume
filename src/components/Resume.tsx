import { loadResumeData } from '@/utils/loadResumeData';
import { Basics, Skills, Work, Academic } from '@/components/sections';

export function Resume() {
  const resumeData = loadResumeData();

  return (
    <div className="resume">
      <Basics resumeData={resumeData} />
      <Skills resumeData={resumeData} />
      <Work resumeData={resumeData} />
      <Academic resumeData={resumeData} />
    </div>
  );
}
