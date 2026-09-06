/* Markdown-lite -> docx builder shared by every document in the package. */
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType,
  AlignmentType, BorderStyle, ShadingType, PageBreak, ImageRun, Footer, Header, PageNumber,
  TableOfContents, LevelFormat, TabStopType, VerticalAlign, PageOrientation,
} = require("docx");

const NAVY = "1E2761";
const TEAL = "1C7293";
const GOLD = "C9A227";
const ICE = "EEF2FA";
const GREY = "5A6270";
const LIGHT = "F7F8FB";
const FONT = "Arial";

const PAGE_W = 12240; // US Letter DXA
const MARGIN = 1200;
const CONTENT_W = PAGE_W - 2 * MARGIN; // 9840

let COMPACT = false;

function pngSize(file) {
  const b = fs.readFileSync(file);
  return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
}

// inline parser: **bold**, *italic*, `code`
function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const tok = m[0];
    if (tok.startsWith("**")) out.push(new TextRun({ text: tok.slice(2, -2), bold: true, ...base }));
    else if (tok.startsWith("`")) out.push(new TextRun({ text: tok.slice(1, -1), font: "Courier New", size: base.size ? base.size - 2 : 18, ...base }));
    else out.push(new TextRun({ text: tok.slice(1, -1), italics: true, ...base }));
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), ...base }));
  return out;
}

function para(text, opts = {}) {
  return new Paragraph({ children: runs(text, opts.run || {}), spacing: COMPACT ? { after: 66, line: 206 } : { after: 120, line: 276 }, ...opts.p });
}

function cell(text, { header = false, width, fill, align } = {}) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    shading: fill ? { type: ShadingType.CLEAR, fill, color: "auto" } : undefined,
    verticalAlign: VerticalAlign.CENTER,
    margins: COMPACT ? { top: 40, bottom: 40, left: 90, right: 90 } : { top: 70, bottom: 70, left: 100, right: 100 },
    children: text.split("\\n").map((line) => new Paragraph({
      alignment: align || AlignmentType.LEFT,
      spacing: COMPACT ? { after: 16, line: 200 } : { after: 40, line: 252 },
      children: runs(line, { size: COMPACT ? 15 : 18, bold: header || undefined, color: header ? "FFFFFF" : undefined }),
    })),
  });
}

function table(headers, rows, widthsPct) {
  const n = headers.length;
  const pct = widthsPct && widthsPct.length === n ? widthsPct : Array(n).fill(100 / n);
  const widths = pct.map((p) => Math.round((CONTENT_W * p) / 100));
  const diff = CONTENT_W - widths.reduce((a, b) => a + b, 0);
  widths[n - 1] += diff;
  const border = { style: BorderStyle.SINGLE, size: 4, color: "C9CFDD" };
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: widths,
    borders: { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border },
    rows: [
      new TableRow({ tableHeader: true, children: headers.map((h, i) => cell(h, { header: true, width: widths[i], fill: NAVY })) }),
      ...rows.map((r, ri) => new TableRow({
        children: r.map((c, i) => cell(String(c), { width: widths[i], fill: ri % 2 === 1 ? LIGHT : undefined })),
      })),
    ],
  });
}

function callout(text, color = TEAL) {
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    borders: {
      top: { style: BorderStyle.SINGLE, size: 6, color }, bottom: { style: BorderStyle.SINGLE, size: 6, color },
      left: { style: BorderStyle.SINGLE, size: 24, color }, right: { style: BorderStyle.SINGLE, size: 6, color },
      insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE },
    },
    rows: [new TableRow({ children: [new TableCell({
      width: { size: CONTENT_W, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: ICE, color: "auto" },
      margins: { top: 120, bottom: 120, left: 200, right: 200 },
      children: text.split("\\n").map((l) => new Paragraph({ spacing: { after: 60, line: 264 }, children: runs(l, { size: 20, color: NAVY }) })),
    })] })],
  });
}

function image(file, widthIn, caption) {
  const { w, h } = pngSize(file);
  const width = widthIn * 96;
  const height = Math.round((width * h) / w);
  const els = [new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { before: 120, after: 60 },
    children: [new ImageRun({ type: "png", data: fs.readFileSync(file), transformation: { width, height } })],
  })];
  if (caption) els.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: caption, italics: true, size: 18, color: GREY })] }));
  return els;
}

/** Parse the markdown-lite body into docx elements. */
function parse(body, baseDir) {
  const lines = body.split("\n");
  const els = [];
  let i = 0;
  let widths = null;
  while (i < lines.length) {
    const line = lines[i];
    const t = line.trim();
    if (t === "") { i++; continue; }
    if (t.startsWith("%widths")) { widths = t.replace("%widths", "").split(",").map(Number); i++; continue; }
    if (t === "---") { els.push(new Paragraph({ children: [new PageBreak()] })); i++; continue; }
    if (t.startsWith("# ")) { els.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(t.slice(2))], spacing: { before: 360, after: 160 } })); i++; continue; }
    if (t.startsWith("## ")) { els.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(t.slice(3))], spacing: COMPACT ? { before: 110, after: 50 } : { before: 280, after: 120 } })); i++; continue; }
    if (t.startsWith("### ")) { els.push(new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun(t.slice(4))], spacing: { before: 200, after: 100 } })); i++; continue; }
    if (t.startsWith("> ")) {
      const buf = [t.slice(2)];
      i++;
      while (i < lines.length && lines[i].trim().startsWith("> ")) { buf.push(lines[i].trim().slice(2)); i++; }
      els.push(callout(buf.join("\\n")));
      els.push(new Paragraph({ spacing: { after: 60 } }));
      continue;
    }
    if (t.startsWith("!! ")) { // warning callout
      els.push(callout(t.slice(3), GOLD)); els.push(new Paragraph({ spacing: { after: 60 } })); i++; continue;
    }
    if (t.startsWith("![")) {
      const m = t.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
      const [cap, wIn] = m[1].split("|");
      els.push(...image(path.resolve(baseDir, m[2]), wIn ? Number(wIn) : 6.6, cap || undefined));
      i++; continue;
    }
    if (t.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const r = lines[i].trim();
        if (!/^\|[\s:-]+\|/.test(r) || !/^[|\s:-]+$/.test(r)) rows.push(r.slice(1, -1).split("|").map((c) => c.trim()));
        i++;
      }
      els.push(table(rows[0], rows.slice(1), widths));
      els.push(new Paragraph({ spacing: { after: COMPACT ? 30 : 80 } }));
      widths = null;
      continue;
    }
    if (/^[-*] /.test(t)) {
      while (i < lines.length && /^\s*[-*] /.test(lines[i])) {
        const raw = lines[i];
        const level = Math.min(2, Math.floor((raw.length - raw.trimStart().length) / 2));
        els.push(new Paragraph({ numbering: { reference: "bullets", level }, spacing: COMPACT ? { after: 24, line: 206 } : { after: 60, line: 264 }, children: runs(raw.trim().slice(2)) }));
        i++;
      }
      continue;
    }
    if (/^\d+\. /.test(t)) {
      const ref = "num" + (els.length); // fresh numbering instance per list
      numberedRefs.push(ref);
      while (i < lines.length && /^\s*\d+\. /.test(lines[i])) {
        els.push(new Paragraph({ numbering: { reference: ref, level: 0 }, spacing: COMPACT ? { after: 24, line: 206 } : { after: 60, line: 264 }, children: runs(lines[i].trim().replace(/^\d+\. /, "")) }));
        i++;
      }
      continue;
    }
    // paragraph: merge following non-empty plain lines
    const buf = [t];
    i++;
    while (i < lines.length && lines[i].trim() !== "" && !/^(#|>|!|\||[-*] |\d+\. |---|%)/.test(lines[i].trim())) { buf.push(lines[i].trim()); i++; }
    els.push(para(buf.join(" ")));
  }
  return els;
}

let numberedRefs = [];

function coverPage(meta) {
  const els = [];
  els.push(new Paragraph({ spacing: { before: 2400 } }));
  els.push(new Paragraph({ children: [new TextRun({ text: meta.series || "PROPOSAL PACKAGE", size: 20, color: TEAL, bold: true, characterSpacing: 40 })], spacing: { after: 300 } }));
  els.push(new Paragraph({ children: [new TextRun({ text: meta.title, size: 60, bold: true, color: NAVY })], spacing: { after: 200 } }));
  if (meta.subtitle) els.push(new Paragraph({ children: [new TextRun({ text: meta.subtitle, size: 28, color: GREY })], spacing: { after: 600 } }));
  const kv = [["Document", meta.docNo || ""], ["Audience", meta.audience || ""], ["Version", meta.version || "1.0 (first-meeting edition)"], ["Date", meta.date || "September 2026"], ["Classification", meta.classification || "Confidential - prepared for the client"]];
  els.push(new Table({
    width: { size: 6000, type: WidthType.DXA }, columnWidths: [1800, 4200],
    borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "DDDDDD" }, insideVertical: { style: BorderStyle.NONE } },
    rows: kv.map(([k, v]) => new TableRow({ children: [
      new TableCell({ width: { size: 1800, type: WidthType.DXA }, margins: { top: 80, bottom: 80 }, children: [new Paragraph({ children: [new TextRun({ text: k, bold: true, size: 20, color: NAVY })] })] }),
      new TableCell({ width: { size: 4200, type: WidthType.DXA }, margins: { top: 80, bottom: 80 }, children: [new Paragraph({ children: [new TextRun({ text: v, size: 20, color: GREY })] })] }),
    ] })),
  }));
  els.push(new Paragraph({ children: [new PageBreak()] }));
  return els;
}

function letterhead(meta) {
  const els = [];
  els.push(new Paragraph({ children: [new TextRun({ text: meta.series || "", size: 17, bold: true, color: TEAL, characterSpacing: 30 })], spacing: { after: 60 } }));
  els.push(new Paragraph({ children: [new TextRun({ text: meta.title, size: 34, bold: true, color: NAVY })], spacing: { after: 40 } }));
  if (meta.subtitle) els.push(new Paragraph({ children: [new TextRun({ text: meta.subtitle, size: 19, color: GREY })], spacing: { after: 140 } }));
  const kv = [["To", meta.to], ["From", meta.from], ["Date", meta.date], ["Re", meta.re]].filter(([, v]) => v);
  if (kv.length) {
    const border = { style: BorderStyle.SINGLE, size: 4, color: "C9CFDD" };
    els.push(new Table({
      width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [900, CONTENT_W - 900],
      borders: { top: border, bottom: border, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
      rows: kv.map(([k, v]) => new TableRow({ children: [
        new TableCell({ width: { size: 900, type: WidthType.DXA }, margins: { top: 40, bottom: 40 }, children: [new Paragraph({ children: [new TextRun({ text: k, bold: true, size: 17, color: NAVY })] })] }),
        new TableCell({ width: { size: CONTENT_W - 900, type: WidthType.DXA }, margins: { top: 40, bottom: 40 }, children: [new Paragraph({ children: [new TextRun({ text: v, size: 17, color: "333333" })] })] }),
      ] })),
    }));
    els.push(new Paragraph({ spacing: { after: 100 } }));
  }
  return els;
}

async function buildDoc({ meta, body, outFile, baseDir, toc = true, landscape = false, cover = true, compact = false, header = true }) {
  numberedRefs = [];
  COMPACT = compact;
  const content = parse(body, baseDir);
  const children = cover ? [...coverPage(meta)] : [...letterhead(meta)];
  if (toc) {
    children.push(new Paragraph({ children: [new TextRun({ text: "Contents", size: 32, bold: true, color: NAVY })], spacing: { after: 200 } }));
    children.push(new TableOfContents("Contents", { hyperlink: true, headingStyleRange: "1-2" }));
    children.push(new Paragraph({ children: [new PageBreak()] }));
  }
  children.push(...content);

  const doc = new Document({
    creator: meta.author || "Proposal team",
    title: meta.title,
    features: { updateFields: true },
    styles: {
      default: { document: { run: { font: FONT, size: compact ? 17 : 21, color: "222222" }, paragraph: compact ? { spacing: { after: 60, line: 206 } } : undefined } },
      paragraphStyles: [
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 34, bold: true, color: NAVY, font: FONT }, paragraph: { outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: compact ? 20 : 26, bold: true, color: TEAL, font: FONT }, paragraph: { outlineLevel: 1, spacing: compact ? { before: 110, after: 50 } : undefined } },
        { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 22, bold: true, color: NAVY, font: FONT }, paragraph: { outlineLevel: 2 } },
      ],
    },
    numbering: {
      config: [
        { reference: "bullets", levels: [
          { level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } },
          { level: 1, format: LevelFormat.BULLET, text: "–", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1000, hanging: 270 } } } },
          { level: 2, format: LevelFormat.BULLET, text: "·", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1440, hanging: 270 } } } },
        ] },
        ...numberedRefs.map((ref) => ({ reference: ref, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 320 } } } }] })),
      ],
    },
    sections: [{
      properties: { page: { size: landscape ? { width: 15840, height: 12240, orientation: PageOrientation.LANDSCAPE } : { width: PAGE_W, height: 15840 }, margin: compact ? { top: 600, bottom: 440, left: 880, right: 880 } : { top: 1200, bottom: 1100, left: MARGIN, right: MARGIN } } },
      headers: (!header || compact) ? undefined : { default: new Header({ children: [new Paragraph({ tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }], children: [new TextRun({ text: meta.shortTitle || meta.title, size: 16, color: GREY }), new TextRun({ text: "\t" + (meta.series || "Proposal package"), size: 16, color: GREY })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }], children: [new TextRun({ text: meta.classification || "Confidential", size: 16, color: GREY }), new TextRun({ text: "\tPage ", size: 16, color: GREY }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: GREY }), new TextRun({ text: " of ", size: 16, color: GREY }), new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 16, color: GREY })] })] }) },
      children,
    }],
  });
  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(outFile, buf);
  console.log("wrote", outFile, Math.round(buf.length / 1024) + " KB");
}

module.exports = { buildDoc };
