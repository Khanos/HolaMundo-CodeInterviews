const Sum = (a, b) => {
  if(b == 1){
    return a + b;
  } else {
    return Sum(++a, --b);
  }
};

module.exports = Sum;
