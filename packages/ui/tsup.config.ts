import { defineConfig } from "tsup";

export default defineConfig({
  target: "esnext",
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  minify: true,
  banner: { js: '"use client";' },
});
