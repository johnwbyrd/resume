import { ResumeData } from '@/utils/loadResumeData';

interface WorkExperienceProps {
  resumeData: ResumeData;
}

export function WorkExperience({ resumeData }: WorkExperienceProps) {
  const { work } = resumeData || {};

  if (!work || work.length === 0) return null;

  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      
      <div className="experience-list">
        {work.map((job, index) => (
          <article key={index} className="experience-item">
            <header>
              <h3>{job.position}</h3>
              <div className="job-company">
                {job.url ? (
                  <a href={job.url} target="_blank" rel="noopener noreferrer">
                    {job.name}
                  </a>
                ) : (
                  job.name
                )}
              </div>
              <div className="job-duration">
                {job.startDate} – {job.endDate || 'Present'}
              </div>
              {job.location && <div className="job-location">{job.location}</div>}
            </header>
            
            {job.summary && <p className="job-summary">{job.summary}</p>}
            
            {job.highlights && job.highlights.length > 0 && (
              <ul className="job-highlights">
                {job.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
} 