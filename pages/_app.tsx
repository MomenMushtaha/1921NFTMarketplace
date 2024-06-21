import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { TransactionProvider } from '../context/TransactionContext';
import React, { useState, useEffect } from 'react';
import LoadingScreen from "../components/PreLoader/LoadingScreen";
import { useRouter } from 'next/router';
import Header from '../components/Header';

// Uncomment if you plan to use ThirdwebWeb3Provider
// import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

// Uncomment if you want to use nprogress for loading bar
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
// import Router from 'next/router';

// Uncomment to configure nprogress
// Router.events.on('routeChangeStart', (url) => {
//   console.log(`Loading: ${url}`);
//   NProgress.start();
// });
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
      <div className='overflow-hidden'>
        <Head>
          <title>1921NFTMarketplace</title>
          <link rel="icon" href="/opensea.ico" />
        </Head>

        <TransactionProvider>
          <Header />
          <LoadingScreen loading={loading} />
          <Component {...pageProps} />
        </TransactionProvider>
      </div>
  );
}

export default MyApp;
