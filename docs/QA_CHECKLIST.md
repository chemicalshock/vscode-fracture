# QA Checklist

Use this checklist in the Extension Development Host (`F5`).

## Language Activation

- Open `examples/smoke.f`.
- Verify VS Code language mode shows `Fracture`.
- Verify `.f` and `.frac` files auto-detect as `Fracture`.

## Highlighting

- Comments: `// ...` and `/* ... */` are highlighted as comments.
- Strings: both `'...'` and `"..."` are highlighted as strings.
- Keywords: `const`, `let`, `if`, `else`, `for`, `do`, `ret`, `import` are highlighted.
- Constants: `true`, `false`, `yes`, `no`, `null` are highlighted.
- Types: `int`, `float`, `double`, `string`, `bool`, `void`, `array`, `object` are highlighted.
- Function declarations are highlighted for:
  - `f::name {}`
  - `f::name [args] {}`
  - `f::name [] -> type {}`
- Call sites are highlighted for:
  - array-first calls (`[args] fn;`)
  - method calls (`target:method`)
  - scoped calls (`module::fn`)
  - chain calls (`... >> fn;`)

## Editor Behavior

- Auto-closing pairs work for `{}`, `[]`, `()`, `""`, and `''`.
- Line comments toggle with `//`.
- Block comments toggle with `/* ... */`.
- Indentation increases after opening brackets and decreases on closing brackets.

## Snippets

- `ifelse`
- `forrange`
- `fdecl`
- `fdecl0`
- `fdeclt`
- `arr`
- `import`
- `print`
