import { ResumeData } from '@/utils/loadResumeData';
import { 
  Basics,
  Work,
  Education,
  Skills,
  Projects,
  Volunteer
} from '@/components/sections';

interface ResumeProps {
  resumeData: ResumeData;
}

export function Resume({ resumeData }: ResumeProps) {
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