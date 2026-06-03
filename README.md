# @plurnk/plurnk-mimetypes-grammar-php

Pre-built `tree-sitter-php` WASM grammar for the [@plurnk/plurnk-mimetypes](https://github.com/plurnk/plurnk-mimetypes) framework.

## install

```
npm i @plurnk/plurnk-mimetypes-grammar-php
```

## what's in here

- **`php.wasm`** — pre-built from the pinned upstream [tree-sitter-php](https://github.com/tree-sitter/tree-sitter-php) commit (`php` subdirectory) (SHA in `.grammar-pin`)
- `scripts/build-wasm.mjs` — reproducible rebuild from the pinned source
- `scripts/verify-wasm.mjs` — CI byte-identical reproducibility check

Declares only `web-tree-sitter` as a peer — no native `tree-sitter`, no node-gyp.

## license

MIT. The bundled `php.wasm` is built from the upstream tree-sitter-php grammar; see the pinned commit for that project's attribution.
