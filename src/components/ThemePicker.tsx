import { THEMES, THEME_LABELS } from '@/lib/theme';

export function ThemePicker() {
  return (
    <div className="theme-picker" data-open="false">
      <button
        type="button"
        className="theme-picker-button"
        aria-haspopup="listbox"
        aria-expanded="false"
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
          <li key={t} role="option">
            <button
              type="button"
              className="theme-picker-option"
              data-theme-value={t}
            >
              {THEME_LABELS[t]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
