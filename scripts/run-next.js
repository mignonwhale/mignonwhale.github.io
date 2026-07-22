#!/usr/bin/env node
// Node 25+ enables an experimental `localStorage` global by default, which breaks
// Next.js dev-overlay SSR code (see docs/troubleshooting.md). Older Node versions
// (e.g. CI's Node 20) don't recognize the flag at all, so it can't be hardcoded
// into package.json scripts — we feature-detect it here instead.
const { spawnSync } = require("node:child_process");

const FLAG = "--no-experimental-webstorage";

const probe = spawnSync(process.execPath, [FLAG, "-e", ""], { stdio: "ignore" });
const nodeArgs = probe.status === 0 ? [FLAG] : [];

const nextBin = require.resolve("next/dist/bin/next");
const result = spawnSync(process.execPath, [...nodeArgs, nextBin, ...process.argv.slice(2)], {
  stdio: "inherit",
});

process.exit(result.status === null ? 1 : result.status);
