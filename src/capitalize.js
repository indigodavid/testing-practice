const capitalize = (string) => {
  let initIndex = 0;
  let firstChar = string.charAt(initIndex);
  const regex = /[^A-z]/i;

  while (regex.test(firstChar) && initIndex < string.length) {
    initIndex += 1;
    firstChar = string.charAt(initIndex);
  }

  return string.substring(0, initIndex) + firstChar.toUpperCase() + string.substring(initIndex + 1);
};

module.exports = capitalize;