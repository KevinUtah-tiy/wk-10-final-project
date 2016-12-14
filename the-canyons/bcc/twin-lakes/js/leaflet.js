// document.write("hello, from the leaflet.js file");
// console.log(document.title);

"use strict";
var mymap = L.map('mapid').setView([40.6032, -111.5841], 12);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    minZoom: 12,
    id: 'mapbox.outdoors',
    accessToken: 'pk.eyJ1Ijoia2V2aW51dGFoIiwiYSI6ImNpdzVsODh6dzAxNDYyb3J0bzA5eXJwNjcifQ.niV4afmX41cnYTvo4lyLhw'
}).addTo(mymap);

//add a marker
var marker = L.marker([40.60338, -111.58448]).addTo(mymap);

//add a polygon
var polygon = L.polygon([
    [40.60294, -111.58416],//1
    [40.60321, -111.58485],//2
    [40.60298, -111.5856],//3
    [40.60311, -111.5874],//4
    [40.60244, -111.58762],//5
    [40.60203, -111.58815],//6
    [40.60206, -111.58974],//7
    [40.60337, -111.59058],//8
    [40.60409, -111.59058],//9
    [40.60517, -111.58933],//10
    [40.60624, -111.58963],//11
    [40.60340, -111.59197],//12
    [40.60167, -111.59116],//13
    [40.60050, -111.59225],//14
    [40.60018, -111.59336],//15
    [40.59890, -111.59333],//16
    [40.59296, -111.60278],//17
    [40.59707, -111.60386],//18
    [40.60152, -111.59338],//19
    [40.60487, -111.59274],//20
    [40.60772, -111.58948],//21
    [40.60582, -111.58795],//22
    [40.60501, -111.58567],//23
    [40.60459, -111.58567],//24
    [40.60378, -111.58416]//25
]).addTo(mymap);

//insert a marker popup
marker.bindPopup("<b>Brighton!<br>Silver Lake Trail.</b>").openPopup();

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
