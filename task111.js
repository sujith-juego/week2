// Pagination
const api_url = 'https://wizard-world-api.herokuapp.com/Elixirs';

async function getapi(lim=10,pg=1,url) {
    const response = await fetch(url);
    let data = await response.json();
   
    for(let i = ((pg*lim)-(lim-1));i<= (pg*lim) ; i++){
        console.log(data[i]);
    }
}
const lim=process.argv[2];
const pg=process.argv[3];


getapi(lim,pg,api_url);
