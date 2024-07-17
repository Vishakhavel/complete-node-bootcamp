console.log('start');

setTimeout(() => {
  console.log('timeout1');
}, 10);

setTimeout(() => {
  console.log('timeout2');
}, 0);

new Promise((resolve) => {
  console.log('promise1');
  resolve();
})
  .then(() => {
    console.log('promise2');
  })
  .then(() => {
    console.log('promise3');
  });

console.log('end');
