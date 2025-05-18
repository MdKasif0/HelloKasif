// src/components/analytics/GoogleAnalytics.tsx
import Script from 'next/script';
import type {FC} from 'react';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'YOUR_GA_TRACKING_ID_PLACEHOLDER';

const GoogleAnalytics: FC = () => {
  // Only run GA in production and if a tracking ID is provided
  if (process.env.NODE_ENV !== 'production' || !GA_TRACKING_ID || GA_TRACKING_ID === 'YOUR_GA_TRACKING_ID_PLACEHOLDER') {
    if (process.env.NODE_ENV === 'production' && ( !GA_TRACKING_ID || GA_TRACKING_ID === 'YOUR_GA_TRACKING_ID_PLACEHOLDER')) {
        console.warn("Google Analytics tracking ID is not set. Analytics will not be active.");
    }
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;