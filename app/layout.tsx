import './globals.css';
import type { Metadata } from 'next';
import { Inter, Questrial } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ahmet Ceylan Portfolio',
  description: 'Design and Coffee',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${questrial.className}`}>
      <body>{children}</body>
    </html>
  );
}
