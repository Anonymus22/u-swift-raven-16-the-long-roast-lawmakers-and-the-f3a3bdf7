// The Long Roast: Lawmakers and the File They Cannot Convert
// One original satirical sentence, written to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "The senator who authored the 400-page AI Safety Act still emails his aide 'please make this a PDF,' because the man writing the rules for the internet's future has never once found the Save As button.";

// Validate: 1–320 chars, single line, no \n or \r inside, not only whitespace.
if (SENTENCE.length < 1 || SENTENCE.length > 320) {
  throw new Error(`sentence must be 1-320 characters, got ${SENTENCE.length}`);
}
if (SENTENCE.includes("\n") || SENTENCE.includes("\r")) {
  throw new Error("sentence must be a single line");
}
if (SENTENCE.trim().length === 0) {
  throw new Error("sentence must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE + "\n", "utf8");
