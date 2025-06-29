// src/app/layout.js
import './globals.css';
import { Suspense } from 'react';

export const metadata = {
  title: 'Prockure - Procure Everything',
  description: 'A modern platform for procuring goods.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}