// document.write("hello, from the leaflet.js file"); //scroll page to find me!!!
console.log(document.title);

"use strict";
var mymap = L.map('mapid').setView([40.700074, -111.713074], 12);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    minZoom: 12,
    id: 'mapbox.outdoors',
    accessToken: 'pk.eyJ1Ijoia2V2aW51dGFoIiwiYSI6ImNpdzVsODh6dzAxNDYyb3J0bzA5eXJwNjcifQ.niV4afmX41cnYTvo4lyLhw'
}).addTo(mymap);

//add a marker
var marker = L.marker([40.700074, -111.713074]).addTo(mymap);

//add a polygon
 var polygon = L.polygon([
     [40.70081, -111.71771],//1
     [40.70837, -111.68926],//2
     [40.68746, -111.64531],//3
     [40.68011, -111.64531],//4
     [40.69511, -111.68926],//5
     [40.69583, -111.71771]//6

//should I keep the circle?

    //unnecessary points to be cleaned up
    // [40.5741, -111.6136] //7
    // [40.575517, -111.680978] example
]).addTo(mymap);

// var circle = L.circle([40.60343, -111.5875], {
//     color: 'royalblue',
//     fillColor: 'skyblue',
//     fillOpacity: 0.25,
//     radius: 275
// }).addTo(mymap);

//insert a marker popup
marker.bindPopup("<b>Winter Road to the <br> Big Water Yurt.</b>").openPopup();

// insert a standalone popup
// var popup = L.popup()
//     .setLatLng([40.68899, -111.74340])
//     .setContent("Scenic Overlook.")
//     .openOn(mymap);

//dealing with events
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);

//use a popup instead of an alert
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " +  e.latlng.toString())
        .openOn(mymap);
}


mymap.on('click', onMapClick);
