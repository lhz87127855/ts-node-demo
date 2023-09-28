const targetArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getTarget = (target) => {
  for (const curItem of targetArr) {
    console.log('当前item', curItem);
    if (curItem === target) {
      return curItem;
    }
  }
};

getTarget(7);
