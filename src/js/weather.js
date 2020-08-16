const locationWeather = document.querySelector(".contents-weather__location__span"),
    temperatureWeather = document.querySelector(".contents-weather__temperature__span"),
    windWeather = document.querySelector(".contents-weather__wind__span"),
    humidityWeather = document.querySelector(".contents-weather__humidity__span");

const API_KEY = "b98bfb8703f93ea3ae17bb84e7e3c08f";
const COORDS = "coords";

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const place = json.name;
            const temperature = json.main.temp;
            const wind = json.wind.speed;
            const humidity = json.main.humidity;

            locationWeather.innerText = place;
            temperatureWeather.innerText = `${temperature} ℃`;
            windWeather.innerText = `${wind} m/s`;
            humidityWeather.innerText = `${humidity} %`;
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Location Info was denied");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();
