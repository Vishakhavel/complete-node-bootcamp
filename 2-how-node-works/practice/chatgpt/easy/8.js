console.log('One');

setTimeout(() => {
  console.log('Two');
}, 100);

Promise.resolve()
  .then(() => {
    console.log('Three');
  })
  .then(() => {
    console.log('Four');
  });

console.log('Five');

// One five three four two
