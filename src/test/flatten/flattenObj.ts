function flattenComplexArray(arr) {
  return arr.reduce((result, item, index) => {
    if (Array.isArray(item)) {
      // 对嵌套的数组递归进行扁平化，并按照指定顺序插入结果数组
      return result.concat(flattenComplexArray(item));
    } else if (typeof item === 'object' && item !== null) {
      // 对嵌套的对象进行扁平化，并按照指定顺序插入结果数组
      const keys = Object.keys(item).sort(); // 按键名排序
      const sortedObject = keys.reduce((obj, key) => {
        obj[key] = item[key];
        return obj;
      }, {});
      return result.concat(sortedObject);
    } else {
      // 非数组和对象直接插入结果数组
      return result.concat(item);
    }
  }, []);
}

const complexArray = [
  1,
  { name: 'John', hobbies: ['reading', 'swimming'] },
  [2, 3],
  { age: 30, address: { city: 'New York' } },
  [4, { job: 'developer' }],
  'end',
];

const flattenedComplexArray = flattenComplexArray(complexArray);
console.log(flattenedComplexArray);
