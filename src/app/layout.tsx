import { ReactNode } from 'react';
import { ThemeProvider } from '@/themes/ThemeContext';

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
        <ThemeProvider>
          {children}
        </ThemeProvider>
        
        {/* Small script for theme switching without React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Get theme from localStorage or default to simple-light
                var storedTheme = localStorage.getItem('theme') || 'simple-light';
                document.documentElement.setAttribute('data-theme', storedTheme);
                
                // Set the select value to match the current theme
                var themeSelect = document.getElementById('theme-select');
                if (themeSelect) {
                  themeSelect.value = storedTheme;
                  
                  // Add event listener for theme changes
                  themeSelect.addEventListener('change', function(e) {
                    var newTheme = e.target.value;
                    document.documentElement.setAttribute('data-theme', newTheme);
                    localStorage.setItem('theme', newTheme);
                  });
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}