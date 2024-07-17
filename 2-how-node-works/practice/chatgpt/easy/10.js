console.log('Hello');

setTimeout(() => {
  console.log('World');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Foo');
  })
  .then(() => {
    console.log('Bar');
  })
  .then(() => {
    console.log('Baz');
  });

console.log('JS');
