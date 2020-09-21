const CountRepeated = (str) => {
  const splitted = str.split(' ');
  const reduced = {
    max: {value:0,word:'',},
  };
  splitted.map((val) => {
    let propName = val.toLowerCase();
    if(reduced[propName]){
      reduced[propName]++;
      reduced.max = reduced.max.value > reduced[propName] ? reduced.max : {value:reduced[propName],word:propName,};
    } else {
      reduced[propName] = 1;
    }
  });
  return `Word: ${reduced.max.word}, Repeated: ${reduced.max.value}`
};

module.exports = CountRepeated;