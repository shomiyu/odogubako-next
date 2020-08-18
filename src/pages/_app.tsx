import type { AppProps } from "next/app";
import "ress";
import "../../styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
