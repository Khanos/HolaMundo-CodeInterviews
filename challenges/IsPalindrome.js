const IsPalindrome = (str) => {
  const inputStr = str.replace(/\s/g, '').toLowerCase();
  const outputStr = inputStr.split('').reverse().join('').replace(/\s/g, '');
  return inputStr == outputStr;
}

module.exports = IsPalindrome;