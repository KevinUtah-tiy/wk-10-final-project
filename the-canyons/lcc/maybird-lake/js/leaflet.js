// document.write("hello, from the leaflet.js file");
console.log(document.title);

"use strict";
var mymap = L.map('mapid').setView([40.575517, -111.680978], 12);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    minZoom: 12,
    id: 'mapbox.outdoors',
    accessToken: 'pk.eyJ1Ijoia2V2aW51dGFoIiwiYSI6ImNpdzVsODh6dzAxNDYyb3J0bzA5eXJwNjcifQ.niV4afmX41cnYTvo4lyLhw'
}).addTo(mymap);

//add a marker
var marker = L.marker([40.575517, -111.680978]).addTo(mymap);

//add a polygon
var polygon = L.polygon([
  [40.576, -111.679],//1
  [40.576, -111.682],//2
  [40.566, -111.698],//3
  [40.554, -111.698],//4
  [40.554, -111.706],//5
  [40.543, -111.706],//6
  [40.543, -111.698],//7
  [40.550, -111.698],//8
  [40.550, -111.690],//9
  [40.563, -111.690],//10
  [40.563, -111.679]//11
]).addTo(mymap);

//insert a marker popup
marker.bindPopup("<b>Trail Head!<br><br>Maybird Lake.</b>").openPopup();

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
