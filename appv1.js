
function addMarkerWithInfowindow(map, marker_position, infowindow_content){
     var myLatlng, marker, infowindow,contentString;
     marker = new google.maps.Marker({
         position: marker_position,
         map: map
     });
     contentString = infowindow_content;
     infowindow = new google.maps.InfoWindow({
         content: contentString
     });
     marker.addListener('click', function() {
        infowindow.open(map, marker);
        document.querySelector("seabrook").innerHTML = "Current Temp: " + `${getSeabrookTemp}` + "F";

     });
}

function initMap() {

 var mapDiv = document.getElementById('map');
 myLatlng = new google.maps.LatLng(29.5641,-95.0255);
 var map = new google.maps.Map(mapDiv, {
   scrollwheel: false,
   center: myLatlng,
   zoom: 9
 });
 var image = 'https://www.nps.gov/maps/tools/symbol-library/assets/img/ice-fishing-black-22.svg';



 addMarkerWithInfowindow(map, new google.maps.LatLng(29.5641,-95.0255), '<div class="seabrook">seabrook info</div>');
 addMarkerWithInfowindow(map, new google.maps.LatLng(29.3013,-94.7977), '<div class="galveston">Placeholder text</div>');
 //           document.querySelector("galveston").innerHTML = "Current wind: " + `${getGalwind}`;
//  google.maps.event.addListener(marker, 'click', (function (marker, count) {
//         return function () {
//           // infoWindow.open(map, marker);
//           document.querySelector("seabrook").innerHTML = "Current Temp: " + `${getSeabrookTemp}` + "F";
//           document.querySelector("galveston").innerHTML = "Current wind: " + `${getGalwind}`;
        
//         }
//       })(marker, count));
    
}
// Seabrook data
fetch('http://api.openweathermap.org/data/2.5/weather?q=Seabrook,us&apiKey=33f578ee2ce36da02936c7f90dbdb8fa&units=imperial')
  .then(function(response){
      let data = response.json();
      return data;
  })
  .then(function(data){
    getSeabrookTemp = data.main.temp
    getSeabrookWind = data.wind
    getSeabrookPressure = data.main.pressure
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




