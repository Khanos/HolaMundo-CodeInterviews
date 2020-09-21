const CleanArray = (arr) => {
  return arr.reduce((acc, val) => {
    if(val){
      acc.push(val);
    }
    return acc
  }, []);
};

module.exports = CleanArray;
