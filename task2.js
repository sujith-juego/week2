// From effect field from API[https://wizard-world-api.herokuapp.com/Elixirs],
// Find all the data which includes keywords (poison, ringworm, portion, hair)
// If no data found return empty array 
// In a string even if poisonous is included that full object should be returned.
// poison ,ringworm,portion ,hair 


const request = require('request');

const task=(lim=10,pgn=1,callback) => {
    const url='https://wizard-world-api.herokuapp.com/Elixirs';
    request({url,json:true},(error,{body}={}) => {
        if(error){
            callback('Unable to connect to service',undefined)
        }
        else if(body.error){
            callback('Unable to find',undefined)
        }

        else{
            let start=(pgn*lim)-(lim-1);
            let stop=pgn*lim;
            callback(undefined,
              { body:body,
               start:start,
               stop:stop
              }
            )
        }
    })
}
const lim=process.argv[2];
const pgn=process.argv[3];
let array = new Array();
let search = ['poison', 'ringworm','portion','hair'];
  task(lim,pgn,(error,data)=>{
      if(error){
          return console.log(error);
      }
      else{
        for(let i=data.start-1;i<data.stop;i++)
        {
            group(data.body[i]);
        }
    console.log(array);

    } 
  })
function group(detail){
    let txt=JSON.parse(JSON.stringify(detail))
    for(let j in txt){
            if(txt[j] != null)
            {
                if(typeof(txt[j]) == "object") 
                {
                    group(txt[j]);
                }  else  {          
                let map = txt[j].split(" ");
                for(let k=0; k < map.length; k++)
                {
                    for(let m=0;m<search.length;m++){ 
                    if(map[k].startsWith(search[m])){
                        array.push(Object.assign({},detail));
                    }
                }
                }
            }
            }
    } 
}





 







