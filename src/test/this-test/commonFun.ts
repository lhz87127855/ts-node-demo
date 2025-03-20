var name = 'globalName';
var commonFuncObj = {
  name: 'objName',
  methods: {
    name: 'methodsName',
    showName: function () {
      console.log('current name is:', this.name);
    },
  },
};

var chainInvoke = () => {
  commonFuncObj.methods.showName();
};

var globalInvoke = () => {
  var targetFunc = commonFuncObj.methods.showName;
  targetFunc(); // 浏览器中为 globalName
};

var protoTypeInvoke = () => {
  Object.prototype.showName = function () {
    return this.methods.showName();
  };

  commonFuncObj.showName();
};

var callInvode = () => {
  commonFuncObj.methods.showName.call(commonFuncObj);
};

chainInvoke();
globalInvoke();
protoTypeInvoke();
callInvode();

// 总结，普通function中的this指向，只能是当前函数的平级属性或者是顶层的属性，除非使用call来改变this
