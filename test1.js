//  Promise

let alert = require('alert');
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
//   });
//   promise.then(
//     result => alert(result),
//     error => alert(error) 
//   );


//   let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });
//   promise.then(
//     result => alert(result), 
//     error => alert(error) 
//   );




//   let promise = new Promise(resolve => {
//     setTimeout(() => resolve("done!"), 1000);
//   });
  
//   promise.then(alert);




  // let promise = new Promise((resolve, reject) => {
  //   setTimeout(() => reject(new Error("Whoops!")), 1000);
  // });
  
  // promise.catch(alert);


// function loadScript(src) {
//   return new Promise(function(resolve, reject) {
//   let script = document.createElement('script');
//   script.src = src;
  
//   script.onload = () => resolve(script);
//   script.onerror = () => reject(new Error(`Script load error for ${src}`));
//   document.head.append(script);
//   });
// }

 
let loadScript = require('loadScript');


let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);
  
  promise.then(script => alert('Another handler...'));