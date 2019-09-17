let appID ="818e46a1924f34d350cd9e41a102c700"; 
let units = 'metric'; 
let searchMethod ='zip'; 

function searchWeather(searchTerm){
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appID}&units=${units}`).then(result => {
        return result.json(); 
    }).then(result => {
        init(result);
    })
}


function init(resultFromServer){
console.log(resultFromServer);
}

document.getElementById('searchBtn').addEventListener('click', () =>{
    let searchTerm = document.getElementById('searchInput').value
    if(searchTerm)
    searchWeather(searchTerm) 
})
