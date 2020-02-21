const tenkiContainer = document.querySelector(".js_weather");
const API_KEY ="86d9362738cd47aa78830065f8ef9e70";
const COORDS = 'coords';

function getWeather(lat, lng , humid){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&humidity=${humid}&appid=${API_KEY}&units=metric`)
    .then(function (response){
        return response.json();
    })
    .then(function(json){
        const tempt = json.main.temp;
        const mplace = json.name;
        const thumidity = json.main.humidity;
        tenkiContainer.innerText = `${mplace},  ${tempt} °C 
           ${thumidity}% RH`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSuccess(position){
    const user_lat = position.coords.latitude;
    const user_long = position.coords.longitude;
    const user_humit = position.coords.humidity;
    const coordsObj = {
        user_lat,
        user_long,
        user_humit
    };
saveCoords(coordsObj);
getWeather(user_lat, user_long, user_humit);
}

function handleGeoError(){
    alert("Can't access geo loaction!");
    var error_div = document.querySelector(".weather_style");
    error_div.style.display="none";
}
function askForCoords(){
navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.user_lat,parsedCoords.user_long,parsedCoords.user_humit);
    }
}


function init(){
    loadCoords();
}

init();
