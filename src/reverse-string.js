const reverseString = (string) => {
  let result = '';
  for (let i = string.length; i >= 0; i -= 1) {
    result += string.charAt(i);
  }
  return result;
};

module.exports = reverseString;