function initMap() {
  var center = {lat: 29.3344, lng: -95.0255};
  var locations = [
    ['<b>SeaWolf Park</b><br>\
    Current Temp: 89°F Mostly Sunny<br>\
    Pressure Index: 1011 hpa<br>\
    Humidity: 57%',   29.3344, 94.7796],
    ['<b>Texas City Dike</b><br>\
    Current Temp: 90°F Mostly Sunny<br>\
    Pressure Index: 1005 hpa<br>\
    Humidity: 55%', 29.3898,-94.8855],
    ['<b>Surfside Jetty</b><br>\
    Current Temp: 90°F  Sunny<br>\
    Pressure Index: 1008 hpa<br>\
    Humidity: 56%', 28.9392, -95.2968],
    ['<b>Bolivar Peninsula</b><br>\
    Current Temp: 90°F  Sunny<br>\
    Pressure Index: 1008 hpa<br>\
    Humidity: 56%', 29.4783, -94.5799],
    ['<b>Seabrook</b><br>\
    Current Temp: 90°F  Sunny<br>\
    Pressure Index: 1009 hpa<br>\
    Humidity: 56%', 29.5641, -95.0255],
    ['<b>San Luis Pass</b><br>\
    Current Temp: 90°F  Sunny<br>\
    Pressure Index: 1009 hpa<br>\
    Humidity: 56%', 29.0825, -95.1216],
    ['<b>Rollover Pass</b><br>\
    Current Temp: 92°F  Sunny<br>\
    Pressure Index: 1008 hpa<br>\
    Humidity: 55%', 29.5083, -94.5005],
    ['<b>Lake Conroe</b><br>\
    Current Temp: 93°F Mostly Sunny<br>\
    Pressure Index: 1008 hpa<br>\
    Humidity: 55%', 30.4369, -95.5985],
    ['<b>Lake Houston</b><br>\
    Current Temp: 91°F Mostly Sunny<br>\
    Pressure Index: 1009 hpa<br>\
    Humidity: 55%', 29.9724, -95.1380 ],
    ['<b>Matagorda Bay</b><br>\
    Current Temp: 92°F Mostly Sunny<br>\
    Pressure Index: 1010 hpa<br>\
    Humidity: 55%', 28.5505, -96.3013 ],

  ];
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: center
  });
var image = 'https://www.nps.gov/maps/tools/symbol-library/assets/img/ice-fishing-black-22.svg';  
var infowindow =  new google.maps.InfoWindow({});
var marker, count;
for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      icon: image
      
    });
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}
fetch('http://api.openweathermap.org/data/2.5/weather?q=Seabrook,us&apiKey=33f578ee2ce36da02936c7f90dbdb8fa&units=imperial')
  .then(function(response){
      let data = response.json();
      console.log(data)
      return data;
  })
  .then(function(data){
    getSeabrookTemp = data.main.temp
    getSeabrookWind = data.wind
    getSeabrookPressure = data.main.pressure
    getSeabrookHumidity = data.main.humidity
    let SeabrookSunRise= data.sys.sunrise
    let SeabrookSunRiseTime = new Date(SeabrookSunRise*1000);
    let SeabrookSunSet = data.sys.sunset
    let SeabrookSunsetTime = new Date(SeabrookSunSet*1000);
    console.log("SEABROOK")
    
    console.log(data.main.temp)
    console.log(data.wind)
    console.log(data.main.pressure)
    console.log(SeabrookSunRiseTime)
    console.log(SeabrookSunsetTime)
  })

  
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Galveston,us&apiKey=33f578ee2ce36da02936c7f90dbdb8fa&units=imperial')
  .then(function(response){
      let data = response.json();
      return data;
  })
  .then(function(data){
    getGalTemp = data.main.temp
    getGalWind = data.wind
    getGalPressure = data.main.pressure
    let GalSunRise= data.sys.sunrise
    let GalSunRiseTime = new Date(GalSunRise*1000);
    let GalSunSet = data.sys.sunset
    let GalSunsetTime = new Date(GalSunSet*1000);
    console.log("Galveston")
    console.log(data.main.temp)
    console.log(data.wind)
    console.log(data.main.pressure)
    console.log(GalSunRiseTime)
    console.log(GalSunsetTime)
  })   


//   WINDY API 
 const options = {
    // Required: API key
    key: 'U5ky6EE5qJsURIDNwoCeMUqVPxkQDrCb', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 29.5641,
    lon: -95.0255,
    zoom: 9,

    hourFormat: '12h',
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

});