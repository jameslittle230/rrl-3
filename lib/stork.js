import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export function generateStorkConfig() {
  let config = `
[input]
base_directory = "posts"
url_prefix = "https://rothrotterlaster.com/"
frontmatter_handling = "Omit"
files = [\n`;
  const fileNames = fs.readdirSync(postsDirectory);
  fileNames.forEach((fileName) => {
    const fullPath = path.join(postsDirectory, path.join(fileName));
    const fileContents = fs.readFileSync(fullPath, "utf8");
    config +=
      `  { path = "${fileName}",` +
      ` url = "${fileName.replace(".mdx", "")}",` +
      ` title = "${fileName}" },\n`;
  });
  config += `\n]
`;
  fs.writeFileSync(path.join(process.cwd(), "stork-posts.toml"), config);
}

export function generateStorkIndex() {
  const storkStdout = execSync("./scripts/stork.sh");
  console.log(storkStdout);
}
