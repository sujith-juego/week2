//  Microtasks
let alert = require('alert');


// let promise = Promise.resolve();

// promise.then(() => alert("promise done!"));

// alert("code finished");





// Promise.resolve()
//   .then(() => alert("promise done!"))
//   .then(() => alert("code finished"));




// Async/Await

// async function f() {
//     return Promise.resolve(1);
//   }
// f().then(alert);





// class Thenable {
//     constructor(num) {
//       this.num = num;
//     }
//     then(resolve, reject) {
//       alert(resolve);
//       // resolve with this.num*2 after 1000ms
//       setTimeout(() => resolve(this.num * 2), 1000); // (*)
//     }
//   }
  
//   async function f() {
//     // waits for 1 second, then result becomes 2
//     let result = await new Thenable(1);
//     alert(result);
//   }
  
//   f();
  


// then --- catch


// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       });
//   }
  
//   loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert);


// async/await

async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)
  
    if (response.status == 200) {
      let json = await response.json(); // (3)
      return json;
    }
  
    throw new Error(response.status);
  }
  
  loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); 