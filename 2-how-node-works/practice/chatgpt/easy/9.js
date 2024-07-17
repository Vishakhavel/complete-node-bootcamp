console.log('Alpha');

setTimeout(() => {
  console.log('Beta');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Gamma');
  })
  .then(() => {
    console.log('Delta');
  })
  .then(() => {
    console.log('Epsilon');
  });

console.log('Zeta');

// alpha, zeta, gamma, delta, epsilon, beta
