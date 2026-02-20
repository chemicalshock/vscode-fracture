# Regression Tests

These tests guard key TextMate grammar regex rules for Fracture syntax.

Run:

```bash
npm test
```

Scope of this suite:
- function signature forms
- array-first and chain call-site forms
- keywords/constants/types token coverage
- comment/string rule configuration
- operator coverage

This suite validates grammar rules as regex contracts. It does not replace full semantic testing.
