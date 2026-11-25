// SPDX-License-Identifier: MIT
// Everyday Things, Two Lines, Longer Run — writes the two-line entry to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const LINE_1 =
  "A bicycle pump is a giant syringe that feeds air instead of medicine, shoving a lungful down its tube every time you push the handle.";
const LINE_2 =
  "The syringe fits the plunger forcing air in one direction, but it leaves out the tyre's one-way valve that traps each push and the rising pressure that makes the rubber stand firm.";

function entryText(): string {
  // Exactly two lines, one sentence each, joined by a single newline.
  const text = `${LINE_1}\n${LINE_2}\n`;
  // Gate guard: the sealed scorer accepts UTF-8 text of 1 to 400 characters.
  if (text.length < 1 || text.length > 400) {
    throw new Error(`entry text out of gate range: ${text.length} characters`);
  }
  return text;
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, entryText(), "utf8");
