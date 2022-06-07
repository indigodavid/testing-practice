class Calculator {
  static add(number1, number2) {
    return number1 + number2;
  }

  static substract(number1, number2) {
    return number1 - number2;
  }

  static multiply(number1, number2) {
    return number1 * number2;
  }

  static divide(number1, number2) {
    if (number2 === 0) {
      if (number1 === 0) {
        return 'Undefined';
      }
      return 'NaN';
    }
    return number1 / number2;
  }
}

module.exports = Calculator;