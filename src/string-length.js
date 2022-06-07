const stringLength = (string) => {
  const result = string.length;

  return (result >= 1 && result <= 10) ? string.length : 'Error';
};

module.exports = stringLength;