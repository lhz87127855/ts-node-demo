const flattenDeep = (array) => {
  return array.reduce((acc, val) => (Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val)), []);
};

const nestedArray = [1, [{ a: [11, 12] }, [3, [4]], 5]];

console.log(flattenDeep(nestedArray));
