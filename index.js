const Multiply = require('./Multiply');
console.log('.................Multiply.................');
console.log('2 x 3 =', Multiply(2, 3));

const Sum = require('./Sum');
console.log('....................Sum...................');
console.log('2 + 3 = ',Sum(2,3));

const GetBiggest = require('./GetBiggest');
console.log('.................GetBiggest...............');
console.log('[2, 5, 6, 100, -2, 105] -> ',GetBiggest([2, 5, 6, 100, -2, 105]));

const CleanArray = require('./CleanArray');
console.log('.................CleanArray...............');
console.log('[1, null, 2, undefined, 3] -> ', CleanArray([1, null, 2, undefined, 3]));

const Flatten = require('./Flatten');
console.log('...................Flatten................');
console.log('[1,[2,3],[4,[5,6]],7] -> ',Flatten([1,[2,3],[4,[5,6]],7]));