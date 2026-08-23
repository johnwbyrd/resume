import { loadResumeData } from '@/utils/loadResumeData';

export function Footer() {
  const { basics } = loadResumeData();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="contact-info">
            {/* Add additional contact info if needed */}
          </div>
          <p className="copyright">© {currentYear} {basics?.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
