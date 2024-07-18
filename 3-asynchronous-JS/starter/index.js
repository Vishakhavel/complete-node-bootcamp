const fs = require('fs');
const superagent = require('superagent');

// // the best way is to return promises, and chain them with .then
// const writeFilePro = (data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('dog-image-link.txt', data, (err) => {
//       if (err) reject('Error while trying to write to the file!');
//       resolve('Successfully read file!');
//     });
//   });
// };

// const readFilePro = () => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//       if (err) reject('Error while reading the file!');
//       resolve(data);
//     });
//   });
// };

// // start the chain of execution
// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log('Data after reading the file', data);
//     //   make the API call
//     return superagent.get(`https://dog.ceo/api/breeds/image/random`);
//   })
//   .then((res) => {
//     console.log('Response from the API', res.body.message);
//     return writeFilePro(res.body.message);
//   })
//   .then(() => {
//     console.log('API data was fetched and written to file successfully!');
//   })
//   .catch((err) => {
//     console.log('Error!', err);
//   });

// // read file, make API call , write to another file, all clean with Promises

// const getDogPic = async () => {
//   try {
//     const data = await fs.readFilePro(`${__dirname}/dog.txt`);
//     console.log('Breed', data);
//     // make api call
//     const res = await superagent.get(`https://dog.ceo/api/breeds/image/random`);
//     console.log('result from API call', res);
//     //   write to file
//     await writeFilePro(res.body.message);
//     console.log('Successfully wrote to file');
//   } catch (err) {
//     console.log('error', err);
//   }
// };

// getDogPic();

const someAsyncFunction = async () => {
  // some async function just here to make this a tad slow.
  const res = await superagent.get(`https://dog.ceo/api/breeds/image/random`);
  return 'some string retured from';
};

const returnedValue = someAsyncFunction();
console.log('returnedValue', returnedValue);

someAsyncFunction().then((res) => {
  console.log('data returned from the async function', res);
});
