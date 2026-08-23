export type Theme =
  | 'simple-light'
  | 'simple-dark'
  | 'elegant'
  | 'retro'
  | 'c64';

export const THEMES: Theme[] = [
  'simple-light',
  'simple-dark',
  'elegant',
  'retro',
  'c64'
];

export const THEME_LABELS: Record<Theme, string> = {
  'simple-light': 'Light',
  'simple-dark': 'Dark',
  'elegant': 'Elegant',
  'retro': 'Retro',
  'c64': 'Commodore 64'
};
