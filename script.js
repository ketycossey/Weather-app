var city =prompt("Name of the city?");
$.getJSON(
"http://api.openweathermap.org/data/2.5/weather?q=" + city +
"&units=imperial&appid=cbf8e726741ef96b67c79530aab07a25",

function(data){
console.log(data);
var icon = 
"https://openweathermap.org/img/w/"+data.weather[0].icon +".png";
var temp = Math.floor(data.main.temp);
var weather = data.weather[0].main;

$('.icon').attr('src',icon);
$('.weather').append(weather);
$('.temp').append(temp);
}
);