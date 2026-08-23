import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/Layout';
import '@/styles/globals.css';
import '@/themes/main.scss';
import { THEMES, THEME_LABELS } from '@/lib/theme';
import resume from '@/data/resume.json';

const inter = Inter({ subsets: ['latin'] });

const { basics } = resume;

export const metadata: Metadata = {
  title: `${basics.name} - ${basics.label}`,
  description: `Professional resume of ${basics.name}, ${basics.label}`,
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
              var themes = ${JSON.stringify(THEMES)};
              var stored = null;
              try { stored = localStorage.getItem('theme'); } catch (e) {}
              var initial;
              if (stored && themes.indexOf(stored) !== -1) {
                initial = stored;
              } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                initial = 'simple-dark';
              } else {
                initial = 'simple-light';
              }
              document.documentElement.setAttribute('data-theme', initial);

              document.addEventListener('DOMContentLoaded', function() {
                var sel = document.getElementById('theme-select');
                if (!sel) return;
                sel.value = document.documentElement.getAttribute('data-theme') || 'simple-light';
                sel.addEventListener('change', function(e) {
                  var v = e.target.value;
                  document.documentElement.setAttribute('data-theme', v);
                  try { localStorage.setItem('theme', v); } catch (err) {}
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