// Promise chaining
let alert = require('alert');
// let loadScript = require('loadScript');
let url = require('url');


// new Promise(function(resolve, reject) {
// setTimeout(() => resolve(1), 1000); 
//   }).then(function(result) {
//     alert(result); 
//     return result * 2;
  
//   }).then(function(result) { 
  
//     alert(result); 
//     return result * 2;
  
//   }).then(function(result) {
  
//     alert(result);
//     return result * 2;
  
//   });
  




// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   });
  
//   promise.then(function(result) {
//     alert(result); // 1
//     return result * 2;
//   });
  
//   promise.then(function(result) {
//     alert(result); // 1
//     return result * 2;
//   });
  
//   promise.then(function(result) {
//     alert(result); // 1
//     return result * 2;
//   });




// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(5), 1000);
  
//   }).then(function(result) {
  
//     alert(result); 
  
//     return new Promise((resolve, reject) => { // (*)
//       setTimeout(() => resolve(result * 3), 1000);
//     });
  
//   }).then(function(result) { 
  
//     alert(result); 
  
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
  
//   }).then(function(result) {
  
//     alert(result); 
  
//   });





// thenable

// class Thenable {
//     constructor(num) {
//       this.num = num;
//     }
//     then(resolve, reject) {
//       alert(resolve); // function() { native code }
//       // resolve with this.num*2 after the 1 second
//       setTimeout(() => resolve(this.num * 2), 1000); // (**)
//     }
//   }
  
//   new Promise(resolve => resolve(1))
//     .then(result => {
//       return new Thenable(result); // (*)
//     })
//     .then(alert);









function loadJson(url) {
    return fetch(url)
      .then(response => response.json());
  }
  
  function loadGithubUser(name) {
    return loadJson(`https://api.github.com/users/${name}`);
  }
  
  function showAvatar(githubUser) {
    return new Promise(function(resolve, reject) {
      let img = document.createElement('img');
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.append(img);
  
      setTimeout(() => {
        img.remove();
        resolve(githubUser);
      }, 3000);
    });
  }
  
  // Use them:
  loadJson('/article/promise-chaining/user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => alert(`Finished showing ${githubUser.name}`));