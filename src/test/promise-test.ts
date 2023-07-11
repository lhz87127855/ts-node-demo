const axios = require('axios');

const testReq = () => {
  axios.get('./json/getUserInfo.json').then((res) => {
    console.log(res);
  });
};

testReq();
