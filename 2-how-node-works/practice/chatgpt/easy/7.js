console.log('P');

setTimeout(() => {
  console.log('Q');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('R');
  })
  .then(() => {
    console.log('S');
  });

Promise.resolve().then(() => {
  console.log('T');
});

console.log('U');

// the .then means it'll add all the .thens to the microtask queue immediately.
// P;
// U;
// R;
// T;
// S;
// Q;
