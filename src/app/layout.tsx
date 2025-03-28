import '@/styles/globals.scss';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/themes/ThemeContext';
import { ResumeProvider } from '@/data/ResumeContext';

export const metadata = {
  title: 'John Byrd | Resume',
  description: 'Professional resume and portfolio of John Byrd, Software Development Executive',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ResumeProvider>
            {children}
          </ResumeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
