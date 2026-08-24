import { ReactNode } from 'react';

interface MaybeLinkProps {
  href?: string;
  children: ReactNode;
}

/* Render children inside an external anchor when href is present, otherwise
   render them as plain text. All external links open in a new tab. */
export function MaybeLink({ href, children }: MaybeLinkProps) {
  if (!href) return <>{children}</>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
