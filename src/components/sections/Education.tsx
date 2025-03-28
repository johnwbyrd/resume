import { ResumeData } from '@/utils/loadResumeData';

interface EducationProps {
  resumeData: ResumeData;
}

export function Education({ resumeData }: EducationProps) {
  const { education } = resumeData || {};

  if (!education || education.length === 0) return null;

  return (
    <section className="education">
      <h2>Education</h2>
      
      <div className="education-list">
        {education.map((edu, index) => (
          <article key={index} className="education-item">
            {edu.studyType && edu.area && (
              <h3>{edu.studyType} in {edu.area}</h3>
            )}
            <div className="institution">
              {edu.url ? (
                <a href={edu.url} target="_blank" rel="noopener noreferrer">
                  {edu.institution}
                </a>
              ) : (
                edu.institution
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
} 