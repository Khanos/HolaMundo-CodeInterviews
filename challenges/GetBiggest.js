const GetBiggest = (arr) => {
  return arr.reduce((acc, val) => acc > val ? acc : val);
}

module.exports = GetBiggest;