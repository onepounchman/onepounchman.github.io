// Local preview of the notebook layouts without the full Ruby/Jekyll toolchain.
// Pages, layouts, CV data and BibTeX all come from the same sources Jekyll uses.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { dirname, extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { Liquid } from "liquidjs";
import MarkdownIt from "markdown-it";
import YAML from "yaml";
import { initSync, parse } from "@retorquere/bibtex-parser";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 4000);
const origin = `http://localhost:${port}`;
const markdown = new MarkdownIt({ html: true });
const liquid = new Liquid();
liquid.registerFilter("relative_url", (value) => value);
liquid.registerFilter("absolute_url", (value) => new URL(value, origin).href);
initSync({ module: await readFile(fileURLToPath(import.meta.resolve("@retorquere/bibtex-parser/bibtex_parser_bg.wasm"))) });

function frontMatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)^---\r?\n/m);
  return match ? { data: YAML.parse(match[1]) || {}, body: source.slice(match[0].length) } : { data: {}, body: source };
}

async function renderPage(filename) {
  const page = frontMatter(await readFile(resolve(root, filename), "utf8"));
  const site = YAML.parse(await readFile(resolve(root, "_config.yml"), "utf8"));
  site.time = new Date();
  site.data = { cv: YAML.parse(await readFile(resolve(root, "_data/cv.yml"), "utf8")) };
  const context = { site, page: { ...page.data, url: page.data.permalink } };
  const bibliography = parse(frontMatter(await readFile(resolve(root, "_bibliography/papers.bib"), "utf8")).body, {
    fieldMode: { title: "literal" },
  });
  if (bibliography.errors.length) throw new Error(JSON.stringify(bibliography.errors));
  const paperTemplate = frontMatter(await readFile(resolve(root, "_layouts/notebook_bib.liquid"), "utf8")).body;
  let body = page.body;
  for (const match of [...body.matchAll(/{%\s*bibliography\b([^%]*)%}/g)]) {
    const selected = match[1].includes("selected=true");
    const entries = bibliography.entries
      .filter((entry) => !selected || entry.fields.selected === "true")
      .sort((a, b) => Number(b.fields.year) - Number(a.fields.year));
    const papers = await Promise.all(
      entries.map((entry) =>
        liquid.parseAndRender(paperTemplate, {
          ...context,
          entry: {
            ...entry.fields,
            key: entry.key,
            author_array: (entry.fields.author || []).map((author) => ({
              first: author.firstName || "",
              prefix: author.prefix || "",
              last: author.lastName || author.name || "",
            })),
          },
        })
      )
    );
    body = body.replace(match[0], `<ol class="bibliography">${papers.map((paper) => `<li>${paper}</li>`).join("\n")}</ol>`);
  }
  const content = markdown.render(await liquid.parseAndRender(body, context));
  const layout = await readFile(resolve(root, `_layouts/${page.data.layout}.liquid`), "utf8");
  return liquid.parseAndRender(layout, { ...context, content });
}

const types = {
  ".css": "text/css",
  ".png": "image/png",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".pdf": "application/pdf",
};
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, origin).pathname);
    if (pathname === "/" || pathname === "/publications/" || pathname === "/publications") {
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.setHeader("Cache-Control", "no-store");
      response.end(await renderPage(pathname === "/" ? "_pages/about.md" : "_pages/publications.md"));
      return;
    }
    // Serve only public assets; never expose source files or Git metadata.
    const path = resolve(root, `.${pathname}`);
    if (!path.startsWith(resolve(root, "assets") + sep) || !(await stat(path)).isFile()) {
      response.writeHead(404).end("Not found");
      return;
    }
    response.setHeader("Content-Type", types[extname(path)] || "application/octet-stream");
    response.end(await readFile(path));
  } catch (error) {
    if (error.code === "ENOENT") response.writeHead(404).end("Not found");
    else {
      console.error(error);
      response.writeHead(500).end("Preview rendering failed. See terminal.");
    }
  }
});
server.listen(port, "127.0.0.1", () => console.log(`Local: ${origin}\nReload after editing to see changes. Jekyll remains the production build.`));
process.on("SIGTERM", () => server.close());
process.on("SIGINT", () => server.close());
