export type Theme = 
  | 'simple-light' 
  | 'simple-dark' 
  | 'elegant' 
  | 'retro' 
  | 'c64' 
  | 'print';

export const THEMES: Theme[] = [
  'simple-light',
  'simple-dark',
  'elegant',
  'retro',
  'c64',
  'print'
];

export const THEME_LABELS: Record<Theme, string> = {
  'simple-light': 'Simple Light',
  'simple-dark': 'Simple Dark',
  'elegant': 'Elegant',
  'retro': 'Retro',
  'c64': 'Commodore 64',
  'print': 'Print'
};

export function setTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

export function getTheme(): Theme {
  return (localStorage.getItem('theme') as Theme) || 'simple-light';
} 