const reverseString = require('./reverse-string.js');

const case1 = 'david';
const case2 = 'hello';
const case3 = 'racecar';

const result1 = reverseString(case1);
const result2 = reverseString(case2);
const result3 = reverseString(case3);

test('String: david, returns divad', () => {
  expect(result1).toBe('divad');
});

test('String: hello, returns olleh', () => {
  expect(result2).toBe('olleh');
});

test('String: racecar, returns racecar', () => {
  expect(result3).toBe('racecar');
});