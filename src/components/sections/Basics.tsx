import { ResumeData } from '@/utils/loadResumeData';
import { EmailLink } from '../EmailLink';
import { MaybeLink } from '../MaybeLink';

interface BasicsProps {
  resumeData: ResumeData;
}

function ensureScheme(url: string): string {
  return /^[a-z][a-z0-9+.-]*:\/\//i.test(url) ? url : `https://${url}`;
}

function domainLabel(url: string): string {
  return url.replace(/^[a-z][a-z0-9+.-]*:\/\//i, '').replace(/^www\./i, '').replace(/\/$/, '');
}

function profileLabel(network?: string, username?: string, url?: string): string {
  if (username) {
    return network?.toLowerCase() === 'github' ? `@${username}` : username;
  }
  if (url) return domainLabel(url);
  return network ?? '';
}

/* Split an email so the plain address never lands in static HTML. Reversed
   halves are handed to a client component that rebuilds the mailto: after
   hydration; the fallback text is what readers without JavaScript see. */
function ContactEmail({ address }: { address: string }) {
  const at = address.indexOf('@');
  if (at < 1) return null;
  const user = address.slice(0, at);
  const domain = address.slice(at + 1);
  return (
    <EmailLink
      emailUser={user.split('').reverse().join('')}
      emailDomain={domain.split('').reverse().join('')}
      fallback={`${user} at ${domain.replace(/\./g, ' dot ')}`}
    />
  );
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
          {basics.email && (
            <li>
              <ContactEmail address={basics.email} />
            </li>
          )}
          {basics.url && (
            <li>
              <MaybeLink href={ensureScheme(basics.url)}>
                {domainLabel(basics.url)}
              </MaybeLink>
            </li>
          )}
          {basics.profiles?.map((profile, i) => (
            <li key={i}>
              {profile.network}:{' '}
              <MaybeLink href={profile.url ? ensureScheme(profile.url) : undefined}>
                {profileLabel(profile.network, profile.username, profile.url)}
              </MaybeLink>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
