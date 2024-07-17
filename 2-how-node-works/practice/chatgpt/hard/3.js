console.log('Init');

async function test() {
  console.log('Test Start');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('Test End');
}

test();

setTimeout(() => {
  console.log('Timeout');
}, 500);

console.log('Complete');
