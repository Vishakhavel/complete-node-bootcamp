console.log('M');

setTimeout(() => {
  console.log('N');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('O');
  })
  .then(() => {
    console.log('P');
  });

async function test() {
  console.log('Q');
  await Promise.resolve();
  console.log('R');
}

test();

console.log('S');
