import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const grammarPath = join(__dirname, '..', 'syntaxes', 'fracture.tmLanguage.json');
const grammar = JSON.parse(readFileSync(grammarPath, 'utf8'));
const repo = grammar.repository;

function re(pattern) {
  return new RegExp(pattern);
}

test('function signature forms are matched', () => {
  const rx = re(repo.functionSignature.match);
  assert.match('f::hello {', rx);
  assert.match('f::sum [a, b] {', rx);
  assert.match('f::typed [] -> int {', rx);
});

test('array-first and chain call forms are matched', () => {
  const arrayFirst = re(repo.arrayFirstCall.match);
  const chain = re(repo.chainCall.match);

  assert.match('[1, 2] fn;', arrayFirst);
  assert.match('[x] math::add;', arrayFirst);
  assert.match('[arr] data:size;', arrayFirst);

  assert.match('>> print;', chain);
  assert.match('>> math::add;', chain);
  assert.match('>> data:size;', chain);
});

test('keywords, constants, and types include agreed tokens', () => {
  const keywords = re(repo.keywords.match);
  const constants = re(repo.constants.match);
  const types = re(repo.types.match);

  assert.match('const', keywords);
  assert.match('import', keywords);
  assert.match('let', keywords);
  assert.match('break', keywords);
  assert.match('continue', keywords);

  assert.match('yes', constants);
  assert.match('no', constants);
  assert.match('null', constants);

  assert.match('int', types);
  assert.match('string', types);
  assert.match('object', types);
});

test('comment and string rules include configured syntax', () => {
  const commentPatterns = repo.comments.patterns;
  const lineComment = re(commentPatterns[0].match);
  const blockCommentBegin = re(commentPatterns[1].begin);

  assert.match('// comment', lineComment);
  assert.match('/*', blockCommentBegin);

  assert.equal(repo.doubleQuotedString.begin, '"');
  assert.equal(repo.singleQuotedString.begin, "'");
});

test('core operators are covered', () => {
  const operators = re(repo.operators.match);

  assert.match('>>', operators);
  assert.match('..', operators);
  assert.match('==', operators);
  assert.match('!=', operators);
  assert.match('<=', operators);
  assert.match('>=', operators);
  assert.match('&&', operators);
  assert.match('||', operators);
});

test('numeric literals cover decimal, exponent, and radix forms', () => {
  const numbers = re(repo.numbers.match);

  assert.match('42', numbers);
  assert.match('-3.14', numbers);
  assert.match('6.02e23', numbers);
  assert.match('0xff', numbers);
  assert.match('0b1010', numbers);
  assert.match('0o755', numbers);
  assert.match('1_000_000', numbers);
});
