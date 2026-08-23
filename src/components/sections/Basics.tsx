import { ResumeData } from '@/utils/loadResumeData';

interface BasicsProps {
  resumeData: ResumeData;
}

export function Basics({ resumeData }: BasicsProps) {
  const { basics } = resumeData || {};

  if (!basics) return null;

  return (
    <>
      <header className="resume-hero">
        <h1 className="name">{basics.name}</h1>
      </header>
      <aside className="resume-aside">
        <ul className="basics-contact">
          {basics.location && (
            <li>{basics.location.city}, {basics.location.region}</li>
          )}
          {basics.email && <li>{basics.email}</li>}
          {basics.url && (
            <li>
              <a href={basics.url} target="_blank" rel="noopener noreferrer">
                {basics.url}
              </a>
            </li>
          )}
          {basics.profiles?.map((profile, i) => (
            <li key={i}>
              {profile.network}:{' '}
              <a href={profile.url} target="_blank" rel="noopener noreferrer">
                {profile.url}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
