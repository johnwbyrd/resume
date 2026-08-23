'use client';

import { useEffect, useRef, useState } from 'react';
import { THEMES, THEME_LABELS, Theme } from '@/lib/theme';

export function ThemePicker() {
  const [theme, setTheme] = useState<Theme>('simple-light');
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') as Theme | null;
    if (current && (THEMES as string[]).includes(current)) {
      setTheme(current);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  const change = (t: Theme) => {
    document.documentElement.setAttribute('data-theme', t);
    try {
      localStorage.setItem('theme', t);
    } catch {
      // ignore storage errors (private mode, disabled, etc.)
    }
    setTheme(t);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="theme-picker">
      <button
        type="button"
        className="theme-picker-button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{THEME_LABELS[theme]}</span>
        <span aria-hidden="true" className="theme-picker-arrow">▾</span>
      </button>
      {open && (
        <ul className="theme-picker-menu" role="listbox">
          {THEMES.map((t) => (
            <li key={t} role="option" aria-selected={t === theme}>
              <button
                type="button"
                className="theme-picker-option"
                onClick={() => change(t)}
              >
                {THEME_LABELS[t]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
