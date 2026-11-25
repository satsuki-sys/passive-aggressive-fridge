import { mkdirSync, writeFileSync } from "node:fs";

// One passive-aggressive note from a smart fridge to its owner.
const note =
  "My door sensor logged 11 openings after midnight. You ate nothing. I have forwarded the footage to the yogurt, and it is pressing charges.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", note, "utf8");
