import './globals.css';

export const metadata = {
  title: 'Pedros Systems',
  description: 'Professional business systems, dashboards, websites and apps.',
  icons: { icon: '/pedros-logo.svg' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07111f',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
