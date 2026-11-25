import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about crypto trading life: buying the dip that keeps dipping.
const joke =
  "I bought the dip at 3 a.m. Woke up to a deeper dip — my portfolio now has more layers than my lasagne.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = joke.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
