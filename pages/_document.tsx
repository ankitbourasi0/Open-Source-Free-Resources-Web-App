import { Html, Head, Main, NextScript, } from "next/document";
import Script from "next/script";

export default function Document() {

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* Inject the script with allowed URL match pattern */}
        <Script
            src="https://cdn.taboola.com/libtrc/unip/154154/recommender.js"
            async
            strategy="afterInteractive"
          />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <Script type='text/javascript' src='//pl22573999.profitablegatecpm.com/0b/70/41/0b7041be3c65bda5fb81457794288a43.js'></Script>
      </Head>
      <body>
        
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTB6GVB8"
height="0" width="0" style={{display:"none",
  visibility:"hidden"}}></iframe></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
