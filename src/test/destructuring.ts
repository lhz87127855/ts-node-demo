const targetObj = { a: 0, b: undefined, c: null, d: [], e: {} };
const { a = '默认值', b = '默认值', c = '默认值', d = '默认值', e = '默认值' } = targetObj;

console.log('a:', a); // 0
console.log('b:', b); // 默认值
console.log('c:', c); // null
console.log('d:', d); // []
console.log('e:', e); // {}
