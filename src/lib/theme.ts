export type Theme =
  | 'simple-light'
  | 'simple-dark'
  | 'elegant'
  | 'matrix'
  | 'c64'
  | 'print';

export const THEMES: Theme[] = [
  'simple-light',
  'simple-dark',
  'elegant',
  'matrix',
  'c64',
  'print'
];

export const THEME_LABELS: Record<Theme, string> = {
  'simple-light': 'Light',
  'simple-dark': 'Dark',
  'elegant': 'Elegant',
  'matrix': 'Matrix',
  'c64': 'Commodore 64',
  'print': 'Print'
};
