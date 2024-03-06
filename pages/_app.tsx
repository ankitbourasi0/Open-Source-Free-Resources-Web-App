import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import Layout from "layouts/Layout";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <GoogleTagManager gtmId="GTM-NTB6GVB8" />
      <Script id="Adsense-id" data-ad-client="ca-pub-4782798272247151"
        async strategy="afterInteractive"
        onError={(e) => { console.error('Script failed to load', e) }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossOrigin="anonymous"
      />
        <Script type='text/javascript' src='//pl22573999.profitablegatecpm.com/0b/70/41/0b7041be3c65bda5fb81457794288a43.js'></Script>

      <ThemeProvider attribute="class">

        <Analytics />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </main>
  );
}

export default MyApp;
