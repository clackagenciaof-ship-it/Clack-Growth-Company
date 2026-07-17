import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clack Growth Company',
  description: 'Site institucional da Clack Growth Company com o Método Growth 360°.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}