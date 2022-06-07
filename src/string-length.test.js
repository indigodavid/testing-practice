const stringLength = require('./string-length.js');

const case1 = 'david';
const case2 = '';
const case3 = 'davidveraca';

const result1 = stringLength(case1);
const result2 = stringLength(case2);
const result3 = stringLength(case3);

test('String: david, returns 5', () => {
  expect(result1).toBe(5);
});

test('Empty string returns error', () => {
  expect(result2).toBe('Error');
});

test('String with more than 10 characters returns error', () => {
  expect(result3).toBe('Error');
});