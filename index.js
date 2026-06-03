// Pre-built tree-sitter-php WASM grammar for @plurnk/plurnk-mimetypes.
//
// This package ships exactly one thing: php.wasm at the package root.
// The framework's TreeSitterLanguageHandler resolves it at runtime via
// import.meta.resolve("@plurnk/plurnk-mimetypes-grammar-php/php.wasm").
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));

/** Absolute filesystem path to the bundled php.wasm. */
export const wasmPath = path.join(here, "php.wasm");
