import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/utils/theme-provider';
import { cn } from '@/lib/utils';

import type { Metadata } from 'next';
import { Abril_Fatface, Inter as FontSans } from 'next/font/google';

import './globals.css';

const fontAbril = Abril_Fatface({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-abril',
  weight: '400',
});
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'HopList',
  description: 'your most effective note-taking app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontAbril.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
