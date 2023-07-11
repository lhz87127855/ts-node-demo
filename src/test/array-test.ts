const arrayTest = [1, 4, 3, 5, 9, 2, 3, 7, 1];

arrayTest.splice(0, 0, 10);
console.log('往下标0处操作', arrayTest);
arrayTest.splice(4, 0, 100);
console.log('往下标非0处操作', arrayTest);
arrayTest.splice(arrayTest.length - 1, 0, 200);
console.log('往下标末尾处操作', arrayTest);