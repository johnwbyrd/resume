import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/Layout';
import '@/styles/globals.css';
import '@/themes/main.scss';
import { THEMES } from '@/lib/theme';
import { ThemePicker } from '@/components/ThemePicker';
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
    <html lang="en">
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
                var picker = document.querySelector('.theme-picker');
                if (!picker) return;
                var button = picker.querySelector('.theme-picker-button');
                var menu = picker.querySelector('.theme-picker-menu');

                function setOpen(open) {
                  picker.setAttribute('data-open', open ? 'true' : 'false');
                  button.setAttribute('aria-expanded', open ? 'true' : 'false');
                }

                button.addEventListener('click', function() {
                  setOpen(picker.getAttribute('data-open') !== 'true');
                });

                menu.querySelectorAll('[data-theme-value]').forEach(function(opt) {
                  opt.addEventListener('click', function() {
                    var v = opt.getAttribute('data-theme-value');
                    document.documentElement.setAttribute('data-theme', v);
                    try { localStorage.setItem('theme', v); } catch (e) {}
                    setOpen(false);
                  });
                });

                document.addEventListener('mousedown', function(e) {
                  if (!picker.contains(e.target)) setOpen(false);
                });

                document.addEventListener('keydown', function(e) {
                  if (e.key === 'Escape') setOpen(false);
                });
              });
            })();
          `
        }} />
      </head>
      <body className={inter.className}>
        <div className="fixed top-4 right-4 z-50">
          <ThemePicker />
        </div>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}