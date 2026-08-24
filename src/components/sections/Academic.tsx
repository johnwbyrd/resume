import { ResumeData } from '@/utils/loadResumeData';
import { MaybeLink } from '../MaybeLink';

interface AcademicProps {
  resumeData: ResumeData;
}

export function Academic({ resumeData }: AcademicProps) {
  const { education, volunteer } = resumeData || {};

  const hasContent =
    (education && education.length > 0) ||
    (volunteer && volunteer.length > 0);

  if (!hasContent) return null;

  return (
    <section className="academic">
      <h2>Academic</h2>

      {education && education.length > 0 && (
        <div className="academic-education">
          {education.map((edu, i) => (
            <p key={i}>
              {edu.studyType} in {edu.area},{' '}
              <MaybeLink href={edu.url}>{edu.institution}</MaybeLink>
            </p>
          ))}
        </div>
      )}

      {volunteer && volunteer.length > 0 && (
        <ul className="academic-list">
          {volunteer.map((v, i) => (
            <li key={i}>
              {v.position} at{' '}
              <MaybeLink href={v.url}>{v.organization}</MaybeLink>
              {v.summary && ` — ${v.summary}`}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
