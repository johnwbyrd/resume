import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/Layout';
import '@/themes/main.scss';
import { THEMES, THEME_LABELS } from '@/lib/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Byrd - Software Development Executive',
  description: 'Professional resume of John Byrd, Software Development Executive',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="simple-light">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Wait for DOM to be ready
              document.addEventListener('DOMContentLoaded', function() {
                const themeSelect = document.getElementById('theme-select');
                if (!themeSelect) return;
                
                // Set select value to match current theme
                themeSelect.value = document.documentElement.getAttribute('data-theme') || 'simple-light';
                
                // Handle theme changes
                themeSelect.addEventListener('change', function(e) {
                  const newTheme = e.target.value;
                  document.documentElement.setAttribute('data-theme', newTheme);
                  localStorage.setItem('theme', newTheme);
                });
              });
            })();
          `
        }} />
      </head>
      <body className={inter.className}>
        <div className="fixed top-4 right-4 z-50">
          <select 
            id="theme-select" 
            className="px-2 py-1 rounded border border-gray-300 bg-white dark:bg-gray-800"
            aria-label="Select theme"
          >
            {THEMES.map(theme => (
              <option key={theme} value={theme}>{THEME_LABELS[theme]}</option>
            ))}
          </select>
        </div>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}