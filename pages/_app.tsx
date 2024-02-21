import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import Layout from "layouts/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Script id="Adsense-id" data-ad-client="ca-pub-987************676"
        async strategy="afterInteractive"
        onError={(e) => { console.error('Script failed to load', e) }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
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
