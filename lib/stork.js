import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const pagesDirectory = path.join(process.cwd(), "pages");

export function generateStorkConfig() {
  let config = `
[input]
base_directory = "pages"
url_prefix = "https://rothrotterlaster.com/"
frontmatter_handling = "Omit"
files = [\n`;

  const fileNames = fs.readdirSync(pagesDirectory);

  fileNames
    .filter((filename) => filename.includes(".mdx"))
    .forEach((filename) => {
      const fullPath = path.join(pagesDirectory, path.join(filename));
      const fileContents = fs.readFileSync(fullPath, "utf8");
      config +=
        ` { path = "${filename}",` +
        ` filetype = "Markdown",` +
        ` url = "${filename.replace(".mdx", "")}",` +
        ` title = "${filename}" },\n`;
    });

  config += `\n]
`;
  fs.writeFileSync(path.join(process.cwd(), "public", "search.toml"), config);
}

export function generateStorkIndex() {
  const storkStdout = execSync("./scripts/stork.sh");
  //   console.log(storkStdout);
}
