import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luxe Noir',
  description: 'Ultra-premium skincare brand e-commerce experience featuring three hero products with minimalist luxury aesthetic, obsidian black and 24k gold visual language.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0A0A0A', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
