import { ResumeData } from '@/utils/loadResumeData';

interface PersonalInfoProps {
  resumeData: ResumeData;
}

export function PersonalInfo({ resumeData }: PersonalInfoProps) {
  const { basics } = resumeData || {};

  if (!basics) return null;

  return (
    <section className="personal-info">
      <h1>{basics.name}</h1>
      <h2>{basics.label}</h2>
      
      <div className="personal-summary">
        <p>{basics.summary}</p>
      </div>
      
      <div className="personal-contact">
        {basics.email && (
          <div className="contact-item">
            <span className="contact-label">Email:</span> 
            <span className="contact-value">{basics.email}</span>
          </div>
        )}
        
        {basics.url && (
          <div className="contact-item">
            <span className="contact-label">Website:</span> 
            <span className="contact-value">{basics.url}</span>
          </div>
        )}
        
        {basics.location && (
          <div className="contact-item">
            <span className="contact-label">Location:</span> 
            <span className="contact-value">
              {basics.location.city}, {basics.location.region} {basics.location.countryCode}
            </span>
          </div>
        )}
        
        {basics.profiles && basics.profiles.length > 0 && (
          <div className="contact-item">
            <span className="contact-label">Profiles:</span>
            <ul className="profiles-list">
              {basics.profiles.map((profile, index) => (
                <li key={index}>
                  <a href={profile.url} target="_blank" rel="noopener noreferrer">
                    {profile.network}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
} 