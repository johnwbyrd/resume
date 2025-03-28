'use client';
import { useState, useEffect, ChangeEvent } from 'react';

// This is the only component that needs client-side JS for interactivity
export function ClientThemeSwitcher() {
  const [theme, setTheme] = useState('simple-light');
  
  // Initialize from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'simple-light';
    setTheme(storedTheme);
  }, []);
  
  // Handle theme changes
  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  return (
    <div className="theme-switcher">
      <label htmlFor="theme-select">Theme:</label>
      <select 
        id="theme-select" 
        value={theme}
        onChange={handleThemeChange}
        aria-label="Select theme"
      >
        <option value="simple-light">Simple Light</option>
        <option value="simple-dark">Simple Dark</option>
        <option value="elegant">Elegant</option>
        <option value="retro">Retro VT-100</option>
        <option value="print">Print</option>
      </select>
    </div>
  );
} 