let update = require('immutability-helper');

let originalArr = [0, 1, 2, 4];
const finalArr = update(originalArr, {
  $splice: [[3, 1, 3, 4, 5, 6, 7]],
});

let originalObj = { a: { a1: 'a1' }, b: 'b' };
const updatedObj = update(originalObj, {
  a: {
    a2: (a2) =>
      update(a2 || {}, {
        c1: {
          $set: 'c1',
        },
      }),
  },
});

// console.log(originalArr, finalArr);
console.log(updatedObj);
