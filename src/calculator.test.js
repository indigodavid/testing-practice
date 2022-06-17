const Calculator = require('./calculator.js');

const number1 = 10;
const number2 = 5;
const number3 = -2;
const number4 = 0;

describe('Adding numbers tests', () => {
  test('10 plus 5 returns 15', () => {
    expect(Calculator.add(number1, number2)).toBe(15);
  });

  test('10 plus -2 returns 8', () => {
    expect(Calculator.add(number1, number3)).toBe(8);
  });

  test('10 plus 0 returns 10', () => {
    expect(Calculator.add(number1, number4)).toBe(10);
  });
});

describe('Substracting numbers tests', () => {
  test('10 minus 5 returns 5', () => {
    expect(Calculator.substract(number1, number2)).toBe(5);
  });

  test('10 minus -2 returns 12', () => {
    expect(Calculator.substract(number1, number3)).toBe(12);
  });

  test('10 minus 0 returns 10', () => {
    expect(Calculator.substract(number1, number4)).toBe(10);
  });
});

describe('Multiplying numbers tests', () => {
  test('10 times 5 returns 50', () => {
    expect(Calculator.multiply(number1, number2)).toBe(50);
  });

  test('10 times -2 returns -20', () => {
    expect(Calculator.multiply(number1, number3)).toBe(-20);
  });

  test('10 times 0 returns 0', () => {
    expect(Calculator.multiply(number1, number4)).toBe(0);
  });
});

describe('Dividing numbers tests', () => {
  test('10 divided by 5 returns 2', () => {
    expect(Calculator.divide(number1, number2)).toBe(2);
  });

  test('10 divided by -2 returns -5', () => {
    expect(Calculator.divide(number1, number3)).toBe(-5);
  });

  test('10 divided by 0 returns NaN', () => {
    expect(Calculator.divide(number1, number4)).toBe('NaN');
  });

  test('0 divided by 0 returns Undefined', () => {
    expect(Calculator.divide(number4, number4)).toBe('Undefined');
  });
});