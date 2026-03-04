import { copyFile, writeFile } from "fs/promises";
import path from "path";

const outDir = path.resolve("dist", "public");
const indexPath = path.join(outDir, "index.html");
const notFoundPath = path.join(outDir, "404.html");
const noJekyllPath = path.join(outDir, ".nojekyll");

await copyFile(indexPath, notFoundPath);
await writeFile(noJekyllPath, "");

console.log("Prepared GitHub Pages artifacts (404.html and .nojekyll).");
