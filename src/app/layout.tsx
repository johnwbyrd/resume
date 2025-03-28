import '@/styles/globals.scss';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Resume',
  description: 'Professional resume and portfolio',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
