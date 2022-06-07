const capitalize = require('./capitalize.js');

const string1 = 'david';
const string2 = 'vera';
const string3 = 'Castillo';
const string4 = '123vera';

describe('Capitalize first validations', () => {
  test('david returns David', () => {
    expect(capitalize(string1)).toBe('David');
  });

  test('vera returns Vera', () => {
    expect(capitalize(string2)).toBe('Vera');
  });

  test('Castillo returns Castillo', () => {
    expect(capitalize(string3)).toBe('Castillo');
  });
});

describe('Capitalize strings beginning with numbers', () => {
  test('123vera returns 123Vera', () => {
    expect(capitalize(string4)).toBe('123Vera');
  });
});