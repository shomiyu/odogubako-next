import React, { useEffect } from "react";
import { AppProps } from "next/app";
import adobeLoader from "../../loader/adobe";
import Head from "next/head";
import "ress";
import "../../style/base.scss";
import "../../style/common.scss";
import Layout from "../components/Layout";

const MyApp = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;

  useEffect(() => {
    if (process.browser) adobeLoader(document);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
