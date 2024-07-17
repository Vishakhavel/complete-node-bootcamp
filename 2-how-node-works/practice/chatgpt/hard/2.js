console.log('First');

async function foo() {
  console.log('Inside Async');
  await bar();
  console.log('End of Async');
}

async function bar() {
  console.log('Inside Bar');
}

foo();

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('Last');
