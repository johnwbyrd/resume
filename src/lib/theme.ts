export type Theme = 'simple-light' | 'simple-dark' | 'elegant' | 'retro' | 'print' | 'c64';

export const THEMES: Theme[] = ['simple-light', 'simple-dark', 'elegant', 'retro', 'print', 'c64'];

export const THEME_LABELS: Record<Theme, string> = {
  'simple-light': 'Simple Light',
  'simple-dark': 'Simple Dark',
  'elegant': 'Elegant',
  'retro': 'Retro',
  'print': 'Print',
  'c64': 'Commodore 64'
};

export function setTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

export function getTheme(): Theme {
  return (localStorage.getItem('theme') as Theme) || 'simple-light';
} 