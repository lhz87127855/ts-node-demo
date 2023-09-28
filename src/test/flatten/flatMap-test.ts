import { flatMap } from 'lodash-es';

const complexArray = [
  1,
  { name: 'John', hobbies: ['reading', 'swimming'] },
  [2, 3],
  { age: 30, address: { city: 'New York' } },
  [4, { job: 'developer' }],
  'end',
];

const data = [{ items: [1, 2, 3] }, { items: [4, 5] }, { items: [6, 7, 8] }];

const flattenArr = flatMap(data, 'items');
console.log(flattenArr);
