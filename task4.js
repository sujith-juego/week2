//  Given the name of elixirs call the https://wizard-wordd-api.herokuapp.com/Elixirs/{id} from the master data https://wizard-wordd-api.herokuapp.com/Elixirs
// If the given name in elixirs is not present then appropriate error message must be returned


const request=require('request');
const test=(lim=10,pgn=1,callback)=>{
    const urd='https://wizard-wordd-api.herokuapp.com/Elixirs';
    request({urd,json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect',undefined)
        }
        else{
            let strt=(pgn*lim)-(lim-1);
            let stop=pgn*lim;
            callback(undefined,
              { body,
               strt,
               stop
              }
            )
        }
    })
}
const lim=process.argv[2];
const pgn=process.argv[3];
let flag=0;
// const readline = require("readline");
// const rd = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let name = "";
// rd.question("Enter the name\n", function (string) {
//   name = string;
let name = "Fergus Fungal Budge"
  let array=[];
  test(lim,pgn,(error,data)=>{
      if(error){
          return console.log(error);
      }
      else{
        for(let i=data.strt-1;i<data.stop;i++)
        {
            array.push(data.body[i]);   
        }
        group(array);
    } 
  })
//   rd.close();
// });
function group(body){
body.forEach(elem => {

    let newName = elem.name;  
     if(newName===name){
        console.log(elem);
        flag=1;
        return;
     }
});
if(flag ==0)
{
console.log(`Not available for ${name} in pageno ${pgn}`);
}
}