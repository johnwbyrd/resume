'use client';

import { useResume } from '@/data/ResumeContext';

export function Footer() {
  const { resume } = useResume();
  const currentYear = new Date().getFullYear();
  const name = resume?.basics?.name || 'John Byrd';
  const email = resume?.basics?.email;
  const url = resume?.basics?.url;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="contact-info">
            {email && (
              <p className="email">
                <span className="label">Email:</span>{' '}
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            )}
            {url && (
              <p className="website">
                <span className="label">Website:</span>{' '}
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </p>
            )}
          </div>
          <p className="copyright">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 