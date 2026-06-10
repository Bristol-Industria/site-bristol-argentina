import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getNavMenu } from '@/lib/wordpress';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'Bristol — Ahoyadores Hidráulicos y Brocas',
    template: '%s | Bristol',
  },
  description:
    'Bristol: soluciones de perforación hidráulica de alta precisión. Ahoyadores y brocas para la industria.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bristolbr.com.ar'),
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    siteName: 'Bristol',
    locale: 'es_AR',
    type: 'website',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const menu = await getNavMenu();

  return (
    <html lang="es" className={inter.variable}>
      <body>
        <Header menu={menu} />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
