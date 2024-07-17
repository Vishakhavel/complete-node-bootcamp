console.log('X');

setTimeout(() => {
  console.log('Y');
}, 10);

for (let i = 0; i < 1000000000; i++) {}

Promise.resolve().then(() => {
  console.log('Z');
});

console.log('W');

// X;
// W;
// Z;
// Y;
