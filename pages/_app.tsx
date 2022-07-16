import type { AppProps } from "next/app";
import { useEffect } from "react";
import { globalStyles } from "../stitches.config";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyles();
  }, []);

  return <Component {...pageProps} />;
}
