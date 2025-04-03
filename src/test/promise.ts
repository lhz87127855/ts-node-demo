Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error('Error') })
  .then(x => console.log('then:', x))
  .catch(err => console.log('catch:', err.message))
  .then(x => console.log('then after catch:', x));