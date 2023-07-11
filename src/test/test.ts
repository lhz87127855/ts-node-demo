/* const obj = {
  a: {
    b: {
      c: 1,
      c1: {
        d: 2
      }
    }
  }
}

const curKey = 'a.b.c1';

let targetObj = obj;
curKey.split('.').forEach(itemKey => {
  targetObj = targetObj[itemKey];
});
targetObj.d = 3;
console.log(targetObj) */

const obj = {
  a: 2,
  b: 3,
  c: 4,
};

const obj2 = {
  b: 4,
  c: 5,
  d: 6,
};

console.log({ ...obj, ...obj2 });
