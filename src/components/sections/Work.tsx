import { ResumeData } from '@/utils/loadResumeData';

interface WorkProps {
  resumeData: ResumeData;
}

export function Work({ resumeData }: WorkProps) {
  const { work } = resumeData || {};

  if (!work || work.length === 0) return null;

  return (
    <section className="work">
      <h2>Experience</h2>
      
      <div className="work-list">
        {work.map((job, index) => (
          <article key={index} className="work-item">
            <header>
              <h3 className="job-heading">
                <span className="job-position">{job.position}</span>
                {job.name && (
                  <>
                    , <span className="job-company">
                      {job.url ? (
                        <a href={job.url} target="_blank" rel="noopener noreferrer">
                          {job.name}
                        </a>
                      ) : (
                        job.name
                      )}
                    </span>
                  </>
                )}
              </h3>
              <p className="job-meta">
                <time>{job.startDate} – {job.endDate || 'Present'}</time>
                {job.location && <> · <span className="job-location">{job.location}</span></>}
              </p>
            </header>
            
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