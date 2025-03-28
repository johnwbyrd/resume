export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="contact-info">
            {/* Add additional contact info if needed */}
          </div>
          <p className="copyright">© {currentYear} John Byrd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 