var prototype = {
  name: 'Jack',
  getName: function() {
      return this.name
  }
}

var obj = Object.create(prototype, {
  job: {
      value: 'IT'
  }
})

console.log(obj.getName())  // Jack
console.log(obj)  // IT