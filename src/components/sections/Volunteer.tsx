import { ResumeData } from '@/utils/loadResumeData';

interface VolunteerProps {
  resumeData: ResumeData;
}

export function Volunteer({ resumeData }: VolunteerProps) {
  const { volunteer } = resumeData || {};

  if (!volunteer || volunteer.length === 0) return null;

  return (
    <section className="volunteer">
      <h2>Volunteer Experience</h2>
      
      <div className="volunteer-list">
        {volunteer.map((item, index) => (
          <article key={index} className="volunteer-item">
            <h3>{item.position}</h3>
            <div className="volunteer-organization">
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.organization}
                </a>
              ) : (
                item.organization
              )}
            </div>
            
            {item.summary && <p className="volunteer-summary">{item.summary}</p>}
            
            {item.highlights && item.highlights.length > 0 && (
              <ul className="volunteer-highlights">
                {item.highlights.map((highlight, i) => (
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