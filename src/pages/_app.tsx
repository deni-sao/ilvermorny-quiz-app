import Footer from 'components/Footer';
import Layout from 'components/Layout';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
      <Head>
        <script src="https://cdn.tailwindcss.com" async />
        <meta charSet="utf-8" />
        <title>Test</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Layout>
        <Component {...pageProps} />
      </Layout> */}
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* <Reset /> */}
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
