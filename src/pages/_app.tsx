import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import theme from '../assets/theme';
import '../utils/icons/fontAwesome';
import '../styles/globals.css';

// Layout
import Base from '../components/layout/Base';
import CenteredFooter from '../components/layout/Footer';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="A University of Waterloo FYDP team looking to bring a unified access solution to buildings near you"
        />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Lynx Locks</title>
      </Head>
      <Base Child={Component} {...pageProps} />
      <CenteredFooter />
    </ThemeProvider>
  );
}

export default MyApp;
