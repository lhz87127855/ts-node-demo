const { produce } = require('immer');
const Immutable = require('immutable');
const Update = require('immutability-helper');

// 创建一个包含10000个对象的数组
const data = Array.from({ length: 100000 }, (_, index) => {
  const randomNum = Math.random() * 100;
  return { id: index, label: `label-${index}-${randomNum}`, value: randomNum };
});

// 使用 Immer 进行更新
console.time('Immer');
const immerUpdatedData = produce(data, (draft) => {
  for (let i = 0; i < draft.length; i++) {
    draft[i].value += 1;
  }
});
console.timeEnd('Immer');

// 使用 Immutable.js 进行更新
console.time('Immutable.js');
const immutableData = Immutable.fromJS(data);
const immutableUpdatedData = immutableData.map((obj) => obj.set('value', obj.get('value') + 1));
console.timeEnd('Immutable.js');

// 使用 immutability-helper 进行更新
console.time('immutability-helper');
const helperUpdatedData = Update(data, { $apply: (obj) => ({ ...obj, value: obj.value + 1 }) });
console.timeEnd('immutability-helper');
