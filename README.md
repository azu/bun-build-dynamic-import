# Bun and Deno compile

## Bun

```bash
$ bun install
$ bun run build
$ rm -rf node_modules # remove node_modules
$ ./dist/bun-example

X
loadDynamicModule failed error: Cannot find package "rambda" from "/$bunfs/root/bun-example"
importMetaResolve failed error: Cannot find package "rambda" from "/$bunfs/root/bun-example"
```

## Deno

```bash
$ dneo task build
$ rm -rf node_modules # remove node_modules
$ ./dist/deno-example

X
X
file:///tmp/deno-compile-deno-example/bun-build-dynamic-import/node_modules/.deno/rambda@9.3.0/node_modules/rambda/dist/rambda.js
```
