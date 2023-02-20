// Promise API

let alert = require('alert');



// let names = ['iliakan', 'remy', 'jeresig'];

// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

// Promise.all(requests)
//   .then(responses => {
//     for(let response of responses) {
//       alert(`${response.url}: ${response.status}`);
//     }

//     return responses;
//   })
//   .then(responses => Promise.all(responses.map(r => r.json())))
//   .then(users => users.forEach(user => alert(user.name)));





// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
//   ]).catch(alert);





// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://no-such-url'
//   ];
  
//   Promise.allSettled(urls.map(url => fetch(url)))
//     .then(results => { // (*)
//       results.forEach((result, num) => {
//         if (result.status == "fulfilled") {
//           alert(`${urls[num]}: ${result.value.status}`);
//         }
//         if (result.status == "rejected") {
//           alert(`${urls[num]}: ${result.reason}`);
//         }
//       });
//     });







// Promise.any([
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ouch!")), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000))
//   ]).catch(error => {
//     console.log(error.constructor.name); // AggregateError
//     console.log(error.errors[0]); // Error: Ouch!
//     console.log(error.errors[1]); // Error: Error!
//   });





  let promise = Promise.resolve();

  promise.then(() => alert("promise done!"));
  
  alert("code finished");