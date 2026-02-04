'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie-consent';

export default function AnalyticsScripts() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setEnabled(stored === 'accepted');
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <Script id="bi-tracking" strategy="afterInteractive">
        {`console.info('BI tracking script placeholder loaded');`}
      </Script>
    </>
  );
}
