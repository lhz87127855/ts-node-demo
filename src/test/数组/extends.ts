// 使用proxy扩展数组原型,使其支持负数索引
const negativeArr = (targetArr) => {
  return new Proxy(targetArr, {
    get(target, prop) {
      console.log('get', typeof prop, prop);
      if (typeof prop === 'string' && prop.match(/^-?\d+$/)) {
        const index = parseInt(prop, 10);
        if (index < 0) {
          return target[target.length + index];
        }
      }
      return target[prop];
    },
  });
};

const testArr = [1, 2, 3, 4, 5];
const negativeArrProxy = negativeArr(testArr);
console.log(negativeArrProxy[-2]);
