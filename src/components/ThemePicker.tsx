'use client';

import { useEffect, useRef, useState } from 'react';
import { THEMES, THEME_LABELS, type Theme } from '@/lib/theme';

/* The initial <html data-theme> attribute is set by an inline pre-hydration
   script in layout.tsx (to avoid a theme flash on first paint). This component
   owns everything else: menu open/close, keyboard/outside-click dismissal,
   and persisting the user's choice to localStorage. */
export function ThemePicker() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Theme | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = document.documentElement.getAttribute('data-theme') as Theme | null;
    setCurrent(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onMouseDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const handleSelect = (t: Theme) => {
    document.documentElement.setAttribute('data-theme', t);
    try {
      localStorage.setItem('theme', t);
    } catch {
      /* localStorage unavailable (private mode, disabled cookies): ignore */
    }
    setCurrent(t);
    setOpen(false);
  };

  return (
    <div className="theme-picker" data-open={open} ref={ref}>
      <button
        type="button"
        className="theme-picker-button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {THEMES.map((t) => (
          <span key={t} className="theme-picker-label" data-theme-label={t}>
            {THEME_LABELS[t]}
          </span>
        ))}
        <span aria-hidden="true" className="theme-picker-arrow">▾</span>
      </button>
      <ul className="theme-picker-menu" role="listbox">
        {THEMES.map((t) => (
          <li key={t} role="option" aria-selected={current === t}>
            <button
              type="button"
              className="theme-picker-option"
              onClick={() => handleSelect(t)}
            >
              {THEME_LABELS[t]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
