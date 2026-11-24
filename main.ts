import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: exactly one emoji — heart hands (U+1FAF6).
const EMOJI = "🫶";

// Gate check: 1 to 8 characters (code points), not only white space.
const chars = [...EMOJI];
if (chars.length < 1 || chars.length > 8) {
  throw new Error(`entry must be 1-8 characters, got ${chars.length}`);
}
if (EMOJI.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

// The entry must be exactly this one emoji: a single grapheme cluster.
const graphemes = [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(EMOJI)];
if (graphemes.length !== 1 || graphemes[0].segment !== EMOJI) {
  throw new Error(`entry must be exactly one emoji, got ${graphemes.length} graphemes`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");

const sha256 = createHash("sha256").update(EMOJI, "utf8").digest("hex");
console.log(`chars: ${chars.length}`);
console.log(`sha256: ${sha256}`);
