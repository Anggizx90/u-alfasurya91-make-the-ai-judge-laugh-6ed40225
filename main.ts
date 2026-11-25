import { mkdirSync, writeFileSync } from "node:fs";

// One original joke about office life, written for
// make.fun competition u-alfasurya91-make-the-ai-judge-laugh-6ed40225
// ("Make the AI Judge Laugh"). A single line, 111 characters.
// Deterministic: the same line is written on every run.
const JOKE =
  "I was CC'd on an email chain so long that by the end I was apologising to strangers for decisions I never made.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
