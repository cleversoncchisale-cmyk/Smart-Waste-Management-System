import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Smart Waste Management System',
  description: 'Waste management platform for Malawi communities'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
