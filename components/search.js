import { push } from "@socialgouv/matomo-next";
import Head from "next/head";
import { useEffect } from "react";

const Search = () => {
  const name = "federalist";

  useEffect(
    () => {
      if (window.stork) {
        stork.register(name, "/search-index.st", {
          showProgress: false,
          forceOverwrite: true,
          onQueryUpdate: (query, results) => {
            window._paq.push(["trackSiteSearch", query, false, results.length]);
          },
          onResultSelected: (query, result) => {
            push([
              "trackContentInteraction",
              "tabActivated",
              query,
              result.entry.title,
              result.entry.url,
            ]);
          },
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
          href="https://files.stork-search.net/releases/v1.4.0/basic.css"
        />
        <script src="https://files.stork-search.net/releases/v1.4.0/stork.js"></script>
      </Head>
      <div className="stork-wrapper">
        <input
          data-stork={name}
          className="stork-input focus:ring-2 focus:ring-blue-600"
          placeholder="Search the site"
        />
        <div data-stork={`${name}-output`} className="stork-output"></div>
      </div>
    </div>
  );
};

export default Search;
