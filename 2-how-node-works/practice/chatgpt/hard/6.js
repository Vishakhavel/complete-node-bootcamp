console.log('1');

async function async1() {
  console.log('2');
  const response = await async2();
  console.log(response);
}

async function async2() {
  console.log('3');
  return '4';
}

async1();

setTimeout(() => {
  console.log('5');
}, 0);

new Promise((resolve) => {
  console.log('6');
  resolve();
}).then(() => {
  console.log('7');
});

console.log('8');
