import type { Metadata } from 'next';
import { ReactNode } from 'react';
import ThemeRegistry from '../components/ThemeRegistry';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import AnalyticsScripts from '../components/AnalyticsScripts';

export const metadata: Metadata = {
  title: {
    default: 'Site Institucional',
    template: '%s | Site Institucional'
  },
  description:
    'Site institucional com informações sobre serviços, preços e conteúdo editorial.'
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
          <CookieBanner />
          <AnalyticsScripts />
        </ThemeRegistry>
      </body>
    </html>
  );
}
