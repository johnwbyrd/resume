'use client';

import { useTheme, ThemeName } from '@/themes/ThemeContext';
import { ChangeEvent } from 'react';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as ThemeName);
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