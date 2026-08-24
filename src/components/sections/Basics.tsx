import { ResumeData } from '@/utils/loadResumeData';

interface BasicsProps {
  resumeData: ResumeData;
}

function withBreaks(url: string): React.ReactNode[] {
  return url
    .split(/(?<=[/.])/)
    .flatMap((part, i) => (i === 0 ? [part] : [<wbr key={i} />, part]));
}

function ensureScheme(url: string): string {
  return /^[a-z][a-z0-9+.-]*:\/\//i.test(url) ? url : `https://${url}`;
}

export function Basics({ resumeData }: BasicsProps) {
  const { basics } = resumeData || {};

  if (!basics) return null;

  return (
    <div className="resume-sidebar">
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
              <a href={ensureScheme(basics.url)} target="_blank" rel="noopener noreferrer">
                {withBreaks(basics.url)}
              </a>
            </li>
          )}
          {basics.profiles?.map((profile, i) => (
            <li key={i}>
              {profile.network}:{' '}
              <a href={ensureScheme(profile.url ?? '')} target="_blank" rel="noopener noreferrer">
                {withBreaks(profile.url ?? '')}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
