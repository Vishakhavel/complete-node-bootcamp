console.log('Start');

async function async1() {
  console.log('Async 1 Start');
  await async2();
  console.log('Async 1 End');
}

async function async2() {
  console.log('Async 2');
}

async1();

setTimeout(() => {
  console.log('Timeout');
}, 0);

new Promise((resolve) => {
  console.log('Promise 1');
  resolve();
}).then(() => {
  console.log('Promise 2');
});

console.log('End');
