const result = await Bun.build({
  entrypoints: ["./entry.ts"],
  outdir: "./dist",
  naming: "[name]-[hash]",
  target: "bun",

});
