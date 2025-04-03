import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/Layout';


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
      <body className={inter.className}>
        <Layout>{children}</Layout>
        {/* Small script for theme switching without React hydration */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Get theme from localStorage or default to simple-light
            var storedTheme = localStorage.getItem('theme') || 'simple-light';
            document.documentElement.setAttribute('data-theme', storedTheme);
          `
        }} />
      </body>
    </html>
  );
}