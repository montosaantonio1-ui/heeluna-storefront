import Script from "next/script";

/**
 * Loads the Meta (Facebook/Instagram) Pixel base code + a PageView event,
 * but only once NEXT_PUBLIC_META_PIXEL_ID is set — until then this renders
 * nothing, so there's no broken/empty pixel call in production.
 *
 * To wire this up: create a pixel in Meta Events Manager
 * (business.facebook.com → Events Manager → Connect data sources → Web),
 * copy its Pixel ID, and set NEXT_PUBLIC_META_PIXEL_ID in Vercel's
 * environment variables (Config, not Secret — same as
 * NEXT_PUBLIC_PRODUCT_HANDLE, since it has to reach the browser).
 *
 * AddToCart is fired from AddToCartButton once the cart mutation succeeds,
 * so ad performance can be measured against real add-to-cart events, not
 * just page views.
 */
export default function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!pixelId) return null;
  // force fresh build to pick up NEXT_PUBLIC_META_PIXEL_ID (cache-bust)

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
