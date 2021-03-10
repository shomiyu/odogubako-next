import React, { useEffect } from "react";
import { AppProps } from "next/app";
import adobeLoader from "../../loader/adobe";
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
