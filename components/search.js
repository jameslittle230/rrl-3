import Head from "next/head";
import { useEffect } from "react";

export default () => {
  const name = "federalist";

  useEffect(() => {
    if (stork) {
      stork.register(
        "federalist",
        "https://files.stork-search.net/federalist.st",
        {
          showProgress: false,
          onResultSelected: (result) => {
            console.log(result)
          }
        }
      );
    }
  },
  [] // Don't rerun on props change
  );

  return (
    <div className="pt-0 pb-3">
      <Head>
        <link
          rel="stylesheet"
          href="https://files.stork-search.net/basic.css"
        />
        <script src="https://files.stork-search.net/stork.js"></script>
      </Head>
      <div className="stork-wrapper">
        <input data-stork={name} className="stork-input" placeholder="Search the site" />
        <div data-stork={`${name}-output`} className="stork-output"></div>
      </div>
    </div>
  );
};
