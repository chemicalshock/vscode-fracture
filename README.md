# Fracture Language Support (VS Code)

VS Code language extension for the Fracture programming language.

## Features

- Language registration for `.f` and `.frac`
- Syntax highlighting via TextMate grammar
- Line and block comments (`//`, `/* ... */`)
- Bracket/quote auto-closing and basic indentation rules
- Starter snippets for control-flow and common Fracture syntax

The grammar is based on current Fracture tokenizer/parser behavior
- keywords like `if`, `for`, `foreach`, `do`, `ret`, `import`, `let`
- literals `true`, `false`, `yes`, `no`, `null`
- operators including `>>`, `..`, `==`, `!=`, `<=`, `>=`, `&&`, `||`
- Fracture call forms like `f::name`, `f::name [args]`, `f::name [] -> type`, `module::fn`, and `target:method`
- call-site highlighting for array-first calls (`[args] fn;`) and pipeline chains (`... >> fn;`)

## Development

1. Open this folder in VS Code.
2. Press `F5` to launch an Extension Development Host.
3. Open `examples/smoke.f` (or any `.f`/`.frac`) and verify highlighting/snippets.

## QA

- Manual smoke file: `examples/smoke.f`
- Manual checklist: `docs/QA_CHECKLIST.md`
- Regression tests: `npm test` (see `tests/README.md`)

## Notes

This is a language-support baseline (no LSP yet). Possible semantic checks, diagnostics, formatting, and go-to-definition in a follow-up via language-server.
