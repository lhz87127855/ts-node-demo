const getType = (value) => {
  const originalStr = Object.prototype.toString.call(value);
  return originalStr.slice(1, -1).split(' ')[1];
};

const complexObj = {
  a: 1,
  b: '2',
  c: false,
  d: [1, 2, 3],
  e: null,
  f: {
    f1: '',
    f2: [1, 1, 1],
  },
  g: new Date(),
};

console.log(getType(false));
