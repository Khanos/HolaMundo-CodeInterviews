const Flatten = arr => {
  let myArr = arr.reduce((acc, val) => acc.concat(val), []);
  if(myArr.findIndex(val => Array.isArray(val)) !== -1){
    return Flatten(myArr);
  }
  return myArr;
};

module.exports = Flatten