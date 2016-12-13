"use strict";

//check to make sure they js is talking to the html
// window.onload = function () {
//   alert("working");
// };
// console.log("Hello, World!");
// console.log(document.title);
// document.write(document.title);
/*  These work, so I may continue  */

// jquery
$(document).ready(function(){

  var api = "//api.openweathermap.org/data/2.5/weather?lat=40.69740&lon=-111.73995&appid=f52141d316d5fe9ec4f644247441dfa9&units=imperial";

//Get JSON data into JS file
$.getJSON(api, function(data) {

  var temp = data.main.temp.toFixed(1);
  var temp_min = data.main.temp_min.toFixed(0);
  var temp_max = data.main.temp_max.toFixed(0);
  var weatherType = data.weather[0].description;
  var windSpeed = data.wind.speed;
  var windDirection = data.wind.deg;
  var humidity = data.main.humidity;
  var pressure = data.main.pressure;
  // var weather = res.weather[0].icon;

  //log to see if it works, then populate page
  // console.log("The current temperature is: ", temp + "°F");
  $("#temp").html("The current temperature is: " + temp + "°F<br>");

  $("#temp_min").html("Low: " + temp_min + "°F");

  $("#temp_max").html("High: " + temp_max + "°F");

  $("#weatherType").html("It is currently " + weatherType);

  $("#windSpeed").html("The wind is currently blowing " + windSpeed + "mph with a heading of " + windDirection + "°.");

  $("#humidity").html("The humidity is " + humidity + "%<br>" + "with atmospheric pressure of " + pressure + "hpa")

  $("#weather").attr('icons/'+weather+'.png');
});
});
// {
// var weatherType = data.weather.description;
// var city = data.name;
// var windSpeed = data.wind.id;
// $.getJSON(api, function(data)
    // console.log(city);
    // $('#city').html(city)
    // $('#weatherType').html(weatherType)

    // console.log('the wind speed is: ', windSpeed);
    // document.getElementById("data").innerHTML;
// console.log(city);
// function myFunction() {
//     var str = "Get the weather!";
//     var result = str.link("//api.openweathermap.org/data/2.5/weather?lat=40.576084&lon=-111.681688&appid=f52141d316d5fe9ec4f644247441dfa9&units=imperial&mode=html");
//     document.getElementById("data").innerHTML = result;
// }
// });
