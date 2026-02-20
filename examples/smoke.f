#!/usr/bin/env fracture

/*
  Fracture smoke test file for VS Code syntax support.
  Covers: comments, strings, const, types, function signatures,
  array-first calls, module calls, methods, and chain calls.
*/

import math;
import file;

const feature_on = yes;
const feature_off = no;

let n: int = 10;
let title: string = "Fracture";
let alt: string = 'Language';
let data = [1, 2, 3, name = "atlas"];

f::hello {
  ['hello'] print;
}

f::add [a, b] {
  ret [a, b] math::add;
}

f::typed [] -> int {
  ret 1;
}

[data.name] print;
[data:size] print;

["sum", [n, 2] math::add] print;
[alt] write >> print;

if [feature_on && !feature_off] do {
  ["enabled"] print;
} else {
  ["disabled"] print;
}

for [i in 1 .. 3] do {
  [i] print;
}

// End of smoke test.
