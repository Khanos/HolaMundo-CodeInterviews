const Multiply = (a, b) => {
  let m = 0;
  for(; b != 0; b--){
    m+=a;
  }
  return m;
}

module.exports = Multiply;

