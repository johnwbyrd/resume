export type Theme = 'simple-light' | 'simple-dark' | 'elegant' | 'retro' | 'print';

export function setTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

export function getTheme(): Theme {
  return (localStorage.getItem('theme') as Theme) || 'simple-light';
} 