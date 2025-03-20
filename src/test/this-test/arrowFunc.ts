var a = 'global';

var arrowFuncObj = {
  a: 'a',
  b: 'b',
  c: {
    a: 'c.a',
    b: () => this.a,
  },
};

console.log(arrowFuncObj.c.b());
