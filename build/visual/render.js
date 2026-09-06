/* Render the visual reply to PDF and page PNGs. */
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const SRC = path.join(__dirname, "reply.html");
const OUT_PDF = path.join(__dirname, "..", "..", "proposal", "17_Visual_Reply_to_Brief.pdf");
const PNG_DIR = process.argv[2] || path.join(__dirname, "..", "..", "proposal");
const NAMES = ["17_Visual_Reply_page1.png", "17_Visual_Reply_page2.png"];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 816, height: 1056 }, deviceScaleFactor: 2 });
  await page.goto("file://" + SRC, { waitUntil: "networkidle" });
  await page.pdf({ path: OUT_PDF, width: "8.5in", height: "11in", printBackground: true, margin: { top: 0, bottom: 0, left: 0, right: 0 } });
  console.log("wrote", OUT_PDF, Math.round(fs.statSync(OUT_PDF).size / 1024) + " KB");

  const sections = await page.$$("section.page");
  for (let i = 0; i < sections.length; i++) {
    const f = path.join(PNG_DIR, NAMES[i] || `visual-${i + 1}.png`);
    await sections[i].screenshot({ path: f });
    console.log("wrote", f);
  }
  await browser.close();
})();
