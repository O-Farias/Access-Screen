import { AppProps } from "next/app";
import Head from "next/head";
import "../app/globals.css"; // Certifique-se de ajustar o caminho conforme necessário

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Access Screen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
