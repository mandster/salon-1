// app/layout.tsx
import { ThemeProvider } from '../lib/ThemeContext';
import './global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
<ThemeProvider>
  <div className="bg-[var(--color-linen)] text-[var(--color-text-dark)]">
    {children}
  </div>
</ThemeProvider>      </body>
    </html>
  );
}
