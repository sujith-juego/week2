// From effect field from API[https://wizard-world-api.herokuapp.com/Elixirs], 
// Find all the data which includes keywords (poison, ringworm, portion, hair)
// If no data found return empty array 
// In a string even if poisonous is included that full object should be returned.
// // task2

const api_url = 'https://wizard-world-api.herokuapp.com/Elixirs';

async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    for(let i = 0;i<= data.length; i++){
        if(data[i] != null)
        group(data[i]);
    }
}
let search = ['poison', 'ringworm','portion','hair'];
function group(detail){
    
    let txt=JSON.parse(JSON.stringify(detail))
    for(let j in txt){
        if(txt[j] != null){
            if(typeof(txt[j]) === "object"){
                group(txt[j]);
            }  else  {          
                let map = txt[j].split(" ");
                for(let k=0; k < map.length; k++){
                    for(let m=0;m<search.length;m++){ 
                        if (map[k] === search[m]) {
                            console.log(detail);
                          }
                    }
                }
            }
        }
    } 
}
getapi(api_url)



