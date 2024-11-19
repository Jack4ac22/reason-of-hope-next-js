"use client"
import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function NavigationEventsImplementation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      // Call gtag if it exists
      if (window.gtag) {
        window.gtag('event', 'page_view');
      }
    }
  }, [pathname, searchParams]);

  return null;
}
function TrackPageViews() {
  return (
    <Suspense fallback={null}>
      <NavigationEventsImplementation />
    </Suspense>
  );
}


export default function GoogleAnalytics() {
  const gaMeasurementID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  if (!gaMeasurementID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaMeasurementID}', { send_page_view: false });
        `}
      </Script>

      <TrackPageViews />
    </>
  )
}