import React, { useEffect } from "react";
import { AppProps } from "next/app";
import Adobe from "./api/adobe";
import "ress";
import "../../styles.scss";
import Layout from "../../components/shared/Layout";

const MyApp = (props: AppProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { Component, pageProps } = props;

  useEffect(() => {
    if (process.browser) Adobe(document);
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
