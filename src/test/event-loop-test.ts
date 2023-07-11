let a: number = 0;

const test1 = () => {
  new Promise((resolve: (value: number) => void) => {
    resolve(a + 1);
    console.log('==test 1==', a);
  }).then((res) => {
    a = res + a;
    console.log('==test 2==', a);
  });
  setTimeout(() => {
    console.log('==test 3==', a++);
  });
  new Promise((resolve: (value: number) => void) => {
    resolve(a++);
    console.log('==test 4==', a);
  }).then((res) => {
    a = a + res;
    console.log('==test 5==', a);
  });
};

const test2 = async () => {
  setTimeout(() => {
    a = a + 10;
    console.log('==test 6==', a);
  });
  a = a + (await 10);
  console.log('==test 7==', a);
  a = (await 10) + a;
  console.log('==test 8==', a);
};

test1();
process.nextTick(() => {
  a++;
  console.log('==test 9==', a);
});
test2();
a++;
console.log('==test 10==', a);
Promise.resolve(10).then((res) => {
  a = a + res;
  console.log('==test 11==', a);
});

export { test1, test2 };
