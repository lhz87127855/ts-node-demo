async function async1() {
  console.log('1-1');
  await async2();
  console.log('1-2');
}
async function async2() {
  console.log('2');
}

async function async3() {
  console.log('3-1');
  await async4();
  console.log('3-2');
}
async function async4() {
  console.log('4');
}

console.log('0-1');
async1();
console.log('0-2');
async3();
console.log('0-3');
