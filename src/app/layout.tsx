import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Chirag Wadhvana | Freelance Flutter Developer',
  description: 'Results-driven Flutter Developer with 5+ years of experience building cross-platform mobile applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans bg-slate-950 text-slate-200">
        {children}
      </body>
    </html>
  );
}
