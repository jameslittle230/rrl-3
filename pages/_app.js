import { useEffect } from "react";
import { init, push } from "@socialgouv/matomo-next";
import "../styles/index.css";

const matomoData = {
  url: "https://analytics.jameslittle.me",
  siteId: "1"
};

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    init(matomoData);
    push('enableHeartBeatTimer');
  }, []);
  return <Component {...pageProps} />;
}
