"use strict";

// Generate map with mapbox API call
mapboxgl.accessToken = keys.mapbox;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252],
});
// Generate Local Weather Map API Call
$.get('https://api.openweathermap.org/data/2.5/forecast', {
    lat: 29.4252,
    lon: 98.4946,
    appid: keys.OPEN_WEATHER_APPID,
    units: 'imperial'
}).done(function (data) {
    updateForcast(data);// Calls Weather API from Lat/long
});

//              Create HTML PUll OBJ FROM Weather API
function updateForcast(data) {
    let html = '';
    for (let i = 0; i < data.list.length; i += 8) {
        let newDate = new Date(data.list[i].dt * 1000);
        html += `
<div class="col">
<div class="card ">
    <ul>
        <li>Date:${newDate.toLocaleDateString('en-us',
            {weekday: 'long'})}</li>
        <li>Description:${data.list[i].weather[0].description}</li>
        <li><img src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png"></li>
        <li>Temp:${data.list[i].main.temp}</li>

        <li>Humidity:${data.list[i].main.humidity}</li>
        <li>Wind:${data.list[i].wind.speed}</li>
        <li>Pressure:${data.list[i].main.pressure}</li>
    </ul>
</div>
</div>`;
    }
    $('#cards').html(html);
}

// // Click button var
let cityInput = document.querySelector('#form1');
let buttonSearch = document.querySelector(".search");
let cityInputValue;
buttonSearch.addEventListener("click", runMeWhenClicked)
//   Marker Var
let marker = new mapboxgl.Marker({draggable: true})

// City search function
function runMeWhenClicked(e) {
    e.preventDefault();
    cityInputValue = cityInput.value;
    console.log(cityInputValue);
    geocode(cityInputValue, keys.mapbox).then(function (data) {
        console.log(data);
        let lat = data[1];
        let lon = data[0];
        map.flyTo({center: data, essential: true})  //Moves to location searched
        marker.setLngLat(data)
            .addTo(map) // Add marker to Map
        // connects search input to open weather
        $.get('https://api.openweathermap.org/data/2.5/forecast', {
            lat: lat,
            lon: lon,
            appid: keys.OPEN_WEATHER_APPID,
            units: 'imperial'
        }).done(function (data) {
            updateForcast(data);  //updates five day forcast with API pull
            console.log(data);
        });
    });
}

// On Drag function
function onDragEnd() {
    const lngLat = marker.getLngLat();
    // // connects Marker input to open weather API
    $.get('https://api.openweathermap.org/data/2.5/forecast', {
        lat: lngLat.lat,
        lon: lngLat.lng,
        appid: keys.OPEN_WEATHER_APPID,
        units: 'imperial',
    })
        .done(function (data) {
            updateForcast(data);  //updates five day forcast with API pull
        });
}
marker.on('dragend', onDragEnd);
console.log(marker.getLngLat())

// Mouse click on Map
function onClick() {
    const lngLat = onClick().getLngLat();
}


