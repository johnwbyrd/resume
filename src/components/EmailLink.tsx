'use client';

import { useEffect, useState } from 'react';

interface EmailLinkProps {
  emailUser: string;
  emailDomain: string;
  fallback: string;
}

function reverseStr(s: string): string {
  return s.split('').reverse().join('');
}

/* Insert <wbr> after "@" and each "." so long addresses wrap at natural
   boundaries instead of mid-word. */
function withEmailBreaks(addr: string): React.ReactNode[] {
  return addr
    .split(/(?<=[@.])/)
    .flatMap((part, i) => (i === 0 ? [part] : [<wbr key={i} />, part]));
}

/* Server renders the obfuscated span; the client swaps in a real mailto anchor
   after hydration. The plain address never appears in the static HTML or the
   RSC payload — only the reversed halves do. */
export function EmailLink({ emailUser, emailDomain, fallback }: EmailLinkProps) {
  const [addr, setAddr] = useState<string | null>(null);

  useEffect(() => {
    const u = reverseStr(emailUser);
    const d = reverseStr(emailDomain);
    if (u && d) setAddr(`${u}@${d}`);
  }, [emailUser, emailDomain]);

  if (!addr) {
    return (
      <span className="email" data-email-user={emailUser} data-email-domain={emailDomain}>
        {fallback}
      </span>
    );
  }
  return <a href={`mailto:${addr}`}>{withEmailBreaks(addr)}</a>;
}
