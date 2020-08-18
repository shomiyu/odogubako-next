import React, { useEffect } from "react";
import { AppProps } from "next/app";
import "ress";
import "../../styles.scss";

const MyApp = (props: AppProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { Component, pageProps } = props;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const WebFont = require("webfontloader");

      WebFont.load({
        typekit: {
          id: "qfd4irr",
        },
      });
    }
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
