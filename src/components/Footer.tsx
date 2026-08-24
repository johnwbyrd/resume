import { loadResumeData } from '@/utils/loadResumeData';

export function Footer() {
  const { basics } = loadResumeData();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          Resume by {basics?.name}. Source at{' '}
          <a
            href="https://github.com/johnwbyrd/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            @johnwbyrd<wbr />/resume
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
