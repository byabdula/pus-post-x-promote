// Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty.
// The post itself is the entry: one post of our own on X quoting make.fun's post
// https://x.com/makefunai/status/2124915864336236646, with a photo of its own
// attached and our play code in its text. This program only hands in the post's
// address: it copies POST.json from the repository root to /output/POST.json,
// where the gate reads it. The house reads the post's replies, reposts and
// quotes from X itself; nothing this program writes about the post is scored.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
