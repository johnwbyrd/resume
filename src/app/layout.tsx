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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set the initial data-theme before hydration so first paint uses the
            user's stored/system preference (avoids a theme flash). All click,
            keyboard, and persistence logic lives in ThemePicker itself. */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var themes = ${JSON.stringify(THEMES)};
              var stored = null;
              try { stored = localStorage.getItem('theme'); } catch (e) {}
              var initial;
              if (stored && themes.indexOf(stored) !== -1) initial = stored;
              else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) initial = 'simple-dark';
              else initial = 'simple-light';
              document.documentElement.setAttribute('data-theme', initial);
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