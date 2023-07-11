function takeLongTime(delay, consoleStr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(consoleStr);
      resolve(consoleStr);
    }, delay);
  });
}

const test1 = async () => {
  console.log('执行test1中---');
  await takeLongTime(1000, 'test1A');
  console.log('执行完成test1A---');
  await setTimeout(() => {
    console.log('test1B');
  }, 1000);
  console.log('test1C');
};

const test2 = async () => {
  console.log('执行test2中---');
  await takeLongTime(500, 'test2A');
  console.log('执行完成test2A---');
  await setTimeout(() => {
    console.log('test2B');
  }, 500);
  console.log('test2C');
};

console.log('主线程执行test1');
test1();
console.log('主线程执行test2');
test2();
console.log('本次主线程结束');
