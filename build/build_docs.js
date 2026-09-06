const fs = require("fs");
const path = require("path");
const { buildDoc } = require("./lib/docx_helpers");

const DOCS = path.join(__dirname, "docs");
const OUT = path.join(__dirname, "..", "proposal");
const only = process.argv[2];

(async () => {
  const files = fs.readdirSync(DOCS).filter((f) => f.endsWith(".js") && (!only || f.includes(only))).sort();
  for (const f of files) {
    const mod = require(path.join(DOCS, f));
    await buildDoc({ meta: mod.meta, body: mod.body, outFile: path.join(OUT, mod.outName), baseDir: OUT, toc: mod.toc !== false, landscape: !!mod.landscape });
  }
})().catch((e) => { console.error(e); process.exit(1); });
