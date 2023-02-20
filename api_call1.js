
let alert = require('alert');


// async function sss(){
//     let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

//     let text = await response.text();
//     alert(text.slice(0, 80) + '...');
// }

// sss();





// async function getUsers(names) {
//     let jobs = [];
  
//     for(let name of names) {
//       let job = fetch(`https://api.github.com/users/${name}`).then(
//         successResponse => {
//           if (successResponse.status != 200) {
//             return null;
//           } else {
//             return successResponse.json();
//           }
//         },
//         failResponse => {
//           return null;
//         }
//       );
//       jobs.push(job);
//     }
  
//     let results = await Promise.all(jobs);
  
//     return results;
//   }
// let name = ['sujith','rajath','ratan'];
// for(nam of name) {
//     alert(getUsers(nam));
// }





// formdata

// let formData = new FormData();
// formData.append('key1', 'value1');
// formData.append('key2', 'value2');

// // List key/value pairs
// for(let [name, value] of formData) {
//   alert(`${name} = ${value}`); 
// }



// fetch : abort

let controller = new AbortController();
let signal = controller.signal;

signal.addEventListener('abort', () => alert("abort!"));

controller.abort(); 
alert(signal.aborted);