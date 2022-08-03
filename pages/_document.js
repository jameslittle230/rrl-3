import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <script
          data-goatcounter="https://rrl.goatcounter.com/count"
          data-goatcounter-settings='{"no_onload": true}' // because the useEffect in app.js does this for us
          async
          src="//gc.zgo.at/count.js"
        ></script>
        <NextScript />
      </body>
    </Html>
  );
}
