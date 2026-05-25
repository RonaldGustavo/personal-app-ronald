import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://ronald-gustavo.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'Ronald Gustavo – Frontend Engineer (Web & Mobile)',
    template: '%s | Ronald Gustavo',
  },
  description:
    'Personal portfolio of Ronald Gustavo, a Frontend Engineer specializing in crafting modern web applications and cross-platform mobile apps for Android and iOS using React, React Native, Vue, Flutter, and Node.js.',
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
  authors: [{ name: 'Ronald Gustavo' }],
  creator: 'Ronald Gustavo',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Ronald Gustavo – Portfolio',
    title: 'Ronald Gustavo – Frontend Engineer (Web & Mobile)',
    description:
      'Personal portfolio of Ronald Gustavo, a Frontend Engineer specializing in modern web and cross-platform mobile apps.',
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
    title: 'Ronald Gustavo – Frontend Engineer (Web & Mobile)',
    description:
      'Personal portfolio of Ronald Gustavo, a Frontend Engineer specializing in modern web and cross-platform mobile apps.',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ronald Gustavo',
  url: siteUrl,
  jobTitle: 'Frontend Engineer',
  description:
    'Frontend Engineer specializing in React, React Native, Vue, Flutter, and Node.js.',
  sameAs: ['https://github.com/RonaldGustavo'],
  knowsAbout: ['React', 'React Native', 'Vue', 'Flutter', 'Node.js', 'TypeScript', 'Next.js'],
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
