// document.write("hello, from the leaflet.js file");
// console.log(document.title);

"use strict";
var mymap = L.map('mapid').setView([40.6407, -111.63823], 12);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    minZoom: 12,
    id: 'mapbox.outdoors',
    accessToken: 'pk.eyJ1Ijoia2V2aW51dGFoIiwiYSI6ImNpdzVsODh6dzAxNDYyb3J0bzA5eXJwNjcifQ.niV4afmX41cnYTvo4lyLhw'
}).addTo(mymap);

//add a marker
var marker = L.marker([40.6407, -111.63823]).addTo(mymap);

//add a polygon
 var polygon = L.polygon([
     [40.64422, -111.6343],//1
     [40.63681, -111.6343],//2
     [40.63635, -111.63332],//3
     [40.63609, -111.63042],//4
     [40.62960, -111.62545],//5
     [40.62887, -111.62779],//6
     [40.63462, -111.63178],//7
     [40.63517, -111.63442],//8
     [40.63397, -111.63582],//9
     [40.63476, -111.63747],//10
     [40.63923, -111.64072],//11
     [40.64422, -111.64261]//12
]).addTo(mymap);

//insert a marker popup
marker.bindPopup("<b>Spruces Campground!<br>Days Fork Trail to Green Basin.</b>").openPopup();

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
