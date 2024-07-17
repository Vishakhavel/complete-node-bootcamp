console.log('X');

setTimeout(() => {
  console.log('Y');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Z');
  })
  .then(() => {
    console.log('W');
  });

async function async1() {
  console.log('A');
  await async2();
  console.log('B');
}

async function async2() {
  console.log('C');
}

async1();

console.log('D');
