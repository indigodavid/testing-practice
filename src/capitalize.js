const capitalize = string => {
  let firstChar = string.charAt(0);
  firstChar = firstChar.toUpperCase();
  return firstChar + string.substring(1);
};

module.exports = capitalize;