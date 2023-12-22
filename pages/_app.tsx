import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import Layout from "layouts/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
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
