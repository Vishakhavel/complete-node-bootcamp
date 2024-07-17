console.log('start');

setTimeout(() => {
  console.log('timeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('promise1');
  })
  .then(() => {
    console.log('promise2');
  })
  .then(() => {
    console.log('promise3');
  });

(async function () {
  console.log('async start');
  await new Promise((resolve) => setTimeout(resolve, 0));
  console.log('async end');
})();

console.log('end');
