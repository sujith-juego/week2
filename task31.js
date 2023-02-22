const request = require('request');
const task=(lim=10,pg=1,callback) => {
    const url='https://wizard-world-api.herokuapp.com/Elixirs';
    request({url,json:true},(error,{body}) => {
        if(error){
            callback('Unable to connect! ',undefined)
        }
        else if(body.error){
            callback('Unable to find the location',undefined)
        }

        else{
            let start=(pg*lim)-(lim-1);
            let stop=pg*lim;
            callback(undefined,
              { body,
               start,
               stop
              }
            )
        }
    })
}
const lim=process.argv[2];
const pg=process.argv[3];
let array = [];
  task(lim,pg,(error,data) => {
      if(error){
          return console.log(error);
      }
      else{
        for(let i=data.start-1;i<data.stop;i++)
        {
           array.push(data.body[i]); 
        }
        group(array);

    } 
  })

function groupBy(detail){
    let map ={};
    detail.forEach(elem => {
    let key = elem.difficulty;
    if(!map[key]) {
        map[key] = [];
    }
    map[key].push(Object.assign({},elem));
    });
    console.log(map);
}