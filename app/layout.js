// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Prockure - Procure Everything',
  description: 'A modern platform for procuring goods.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}