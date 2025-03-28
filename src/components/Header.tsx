export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-info">
            <h1 className="name">John Byrd</h1>
            <p className="label">Software Development Executive</p>
          </div>
          
          <div className="theme-switcher">
            <label htmlFor="theme-select">Theme:</label>
            <select 
              id="theme-select" 
              defaultValue="simple-light"
              aria-label="Select theme"
            >
              <option value="simple-light">Simple Light</option>
              <option value="simple-dark">Simple Dark</option>
              <option value="elegant">Elegant</option>
              <option value="retro">Retro VT-100</option>
              <option value="print">Print</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
} 