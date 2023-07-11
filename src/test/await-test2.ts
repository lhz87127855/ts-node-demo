async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}

async function async3() {
  console.log('async3 start');
  await async4();
  console.log('async3 end');
}
async function async4() {
  console.log('async4');
}

console.log('script start');
async1();
console.log('script middle');
async3();
console.log('script end');