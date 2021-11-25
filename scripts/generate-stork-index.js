const fs = require("fs");
const path = require("path");
const glob = require("glob");
const HTMLParser = require("node-html-parser");

const root = process.cwd();
const dir = path.join(root, "out");
if (!fs.existsSync(dir)) {
  console.warn(
    "Not building Stork index. Run `next export` after this finishes, then run `next build` again to generate the index."
  );
  return;
}

const files = glob.sync(`${dir}/**/*.html`);

const slugsToIgnore = ["404", "index"];

const blogPosts = files
  .map((path) => {
    const split = path.split("/");
    const slug = split[split.length - 1].replace(".html", "");
    if (slugsToIgnore.includes(slug)) return null;
    const source = fs.readFileSync(path, "utf8");
    const title =
      HTMLParser.parse(source).querySelector("#stork-content h1").text;
    return {
      path,
      slug,
      source,
      title,
    };
  })
  .filter((a) => !!a);

fs.writeFileSync(
  "public/search.toml",
  `
[input]
${blogPosts
  .map(
    (page) => `
[[input.files]]
path = "${page.path}"
url = "/${page.slug}"
title = "${page.title}"
html_selector_override = "#stork-content"
`
  )
  .join("")}
`
);
