import "../styles/globals.css";
import "simplebar/dist/simplebar.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import AppLayout from "../src/layout/AppLayout";
import { AppContext } from "../src/contexts/AppContext";
import ChatAppTheme from "../src/theme/AppTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppContext>
        <ChatAppTheme>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ChatAppTheme>
      </AppContext>
    </>
  );
}

export default MyApp;
