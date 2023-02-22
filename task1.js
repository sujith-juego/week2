const request = require('request');
const task=(lim=10,pgnlim=1,callback)=>{
    const url='https://wizard-world-api.herokuapp.com/Elixirs';
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to service',undefined)
        }
        else if(body.error){
            callback('Unable to find the location',undefined)
        }

        else{
            let start=(pgnlim*lim)-(lim-1);
            let stop=pgnlim*lim;
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
const pgnlim=process.argv[3];
  task(lim,pgnlim,(error,data)=>{
      if(error){
          return console.log(error);
      }
      else{
        for(let i=data.start-1;i<data.stop;i++)
        {
            console.log(data.body[i]);
        }

    } 
  })