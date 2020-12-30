import Head from "next/head";
import { useEffect } from "react";

const Search = () => {
  const name = "federalist";

  useEffect(
    () => {
      if (stork) {
        stork.register(name, "https://files.stork-search.net/federalist.st", {
          showProgress: false,
        });
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
        <input
          data-stork={name}
          className="stork-input"
          placeholder="Search the site"
        />
        <div data-stork={`${name}-output`} className="stork-output"></div>
      </div>
    </div>
  );
};

export default Search;
