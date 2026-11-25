import { mkdirSync, writeFileSync } from "node:fs";

// One original joke about office life, written for
// make.fun competition u-alfasurya91-make-the-ai-judge-laugh-6ed40225
// ("Make the AI Judge Laugh"). A single line, 111 characters.
// Deterministic: the same line is written on every run.
const JOKE =
  "I was CC'd on an email chain so long that by the end I was apologising to strangers for decisions I never made.";

// Runtime gate mirroring the sealed scorer's gate in RULES.txt
// ("UTF-8 text of 1 to 200 characters, not only white space", one line):
// enforcing the same validity rules here means an invalid joke fails
// loudly at build time instead of silently scoring 0 with no rate.
// The joke text itself is unchanged; this only refuses to write it
// if it ever stopped satisfying the competition's own validity rule.
function validateJoke(joke: string): void {
  // Valid UTF-8: encode and decode strictly; a lone surrogate (which
  // cannot be encoded as valid UTF-8) fails the round-trip / fatal decode.
  const encoded = Buffer.from(joke, "utf8");
  const decoded = new TextDecoder("utf-8", { fatal: true }).decode(encoded);
  if (decoded !== joke) {
    throw new Error("Invalid joke: must be valid UTF-8 text");
  }
  // Count characters as Unicode code points, as the scorer does,
  // not UTF-16 code units (an astral character is one character).
  const charCount = [...joke].length;
  if (charCount < 1 || charCount > 200) {
    throw new Error(
      `Invalid joke: must be 1 to 200 characters, got ${charCount}`,
    );
  }
  if (joke.trim().length === 0) {
    throw new Error("Invalid joke: must not be only whitespace");
  }
  if (joke.includes("\n") || joke.includes("\r")) {
    throw new Error("Invalid joke: must be exactly one line (no newline characters)");
  }
}

validateJoke(JOKE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
