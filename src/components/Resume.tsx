import { loadResumeData } from '@/utils/loadResumeData';
import { 
  Basics,
  Work,
  Education,
  Skills,
  Projects,
  Volunteer
} from '@/components/sections';

export function Resume() {
  const resumeData = loadResumeData();
  
  return (
    <div className="resume">
      <Basics resumeData={resumeData} />
      <Work resumeData={resumeData} />
      <Skills resumeData={resumeData} />
      <Education resumeData={resumeData} />
      <Projects resumeData={resumeData} />
      <Volunteer resumeData={resumeData} />
    </div>
  );
} 