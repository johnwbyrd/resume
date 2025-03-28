import '@/styles/globals.scss';
import { ReactNode } from 'react';

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
    <html lang="en" data-theme="simple-light">
      <body>
        {children}
      </body>
    </html>
  );
}