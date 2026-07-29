import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://www.ronaldgustavo.my.id';

export const metadata: Metadata = {
  title: {
    default: 'Ronald Gustavo | Frontend Engineer',
    template: '%s | Ronald Gustavo',
  },
  description:
    'Frontend Engineer focused on building elegant and high-performance apps for Android, iOS, and the web.',
  keywords: [
    'Frontend Engineer',
    'React',
    'React Native',
    'Vue',
    'Flutter',
    'Next.js',
    'TypeScript',
    'Web Developer',
    'Mobile Developer',
    'Ronald Gustavo',
  ],
  authors: [{ name: 'Ronald Gustavo', url: siteUrl }],
  creator: 'Ronald Gustavo',
  publisher: 'Ronald Gustavo',
  applicationName: 'Ronald Gustavo Portfolio',
  category: 'technology',
  metadataBase: new URL(siteUrl),
  referrer: 'origin-when-cross-origin',
  alternates: { canonical: '/' },
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    title: 'Ronald Gustavo',
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  verification: {
    google: '57YNAWSLZKQK7DFE8nkn6sX2LpBanYVZ6EAPUdYK6yA',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Ronald Gustavo – Portfolio',
    title: 'Ronald Gustavo | Frontend Engineer',
    description:
      'Frontend Engineer focused on building elegant and high-performance apps for Android, iOS, and the web.',
    images: [
      {
        url: '/assets/image/profile-ronald.webp',
        width: 400,
        height: 400,
        alt: 'Ronald Gustavo – Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ronald Gustavo | Frontend Engineer',
    description:
      'Frontend Engineer focused on building elegant and high-performance apps for Android, iOS, and the web.',
    images: ['/assets/image/profile-ronald.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0c10',
  colorScheme: 'dark',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ronald Gustavo',
  url: siteUrl,
  image: `${siteUrl}/assets/image/profile-ronald.webp`,
  jobTitle: 'Frontend Engineer',
  description:
    'Frontend Engineer specializing in React, React Native, Vue, Flutter, and Node.js.',
  email: 'mailto:ronaldgustavo.rg@gmail.com',
  sameAs: ['https://github.com/RonaldGustavo'],
  knowsAbout: ['React', 'React Native', 'Vue', 'Flutter', 'Node.js', 'TypeScript', 'Next.js'],
  mainEntityOfPage: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
