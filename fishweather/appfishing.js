// On load will initialize map with array of locations

function initMap() {
  
  // Centers the map @ Seabrook
  var center = {lat: 29.5641, lng: -95.0255};
  var locations = [
      ['Sea Wolf Park', 29.3344, -94.7796, ],
      ['Texas City Dike', 29.3898, -94.8855],
      ['Surfside Jetty', 28.9392, -95.2968],
      ['Galveston Jetty', 29.3013, -94.7977],
      ['Bolivar Peninsula', 29.4783, -94.5799],
      ['Seabrook',29.5641, -95.0255 ],
      ['San Luis Pass',29.0825, -95.1216 ],
      ['Roll Over Pass',29.5083, -94.5005 ],
      ['Lake Conroe',30.4369, -95.5985 ],
      ['Lake Houston',29.9724, -95.1380 ],
      ['Lake Sommerville',30.3112, -96.5730 ],
      ['Lake Livingston',30.7593, -95.1536 ],
      ['Matagorda Bay',28.5505, -96.3013 ],
  ];
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: center
  });
  // Fish icon for marker
var image = 'https://www.nps.gov/maps/tools/symbol-library/assets/img/ice-fishing-black-22.svg';  
//   Display popup window when user clicks on marker

var contentstring = '<div id="seabrook-temp" style=" width:180px; height: 20px; background-color: #EDF5F5;">' +
'-' + 
'</div>'+ '<div id="seabrook-pressure" style=" width:180px; height: 20px; background-color: #EDF5F5;">' +
'-' + 
'</div>'+ '<div id="seabrook-humidity" style=" width:180px; height: 20px; background-color: #EDF5F5;">' +
'-' + 
'</div>';

var infoWindow =  new google.maps.InfoWindow({
    content: contentstring
   
});
var marker, count;
//   Iterates through locations array and display the locations & title on the map
for (count = 0; count < locations.length; count++) {
      marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      icon: image,
    });
  //   popup functionality when user click on marker for weather info
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infoWindow.open(map, marker);

        displayWeatherData();
      }
    })(marker, count));
  
  }
}

function displayWeatherData(){
  document.getElementById("seabrook-temp").innerHTML = "Current Temp: " + `${getSeabrookTemp}` + "F";
  document.getElementById("seabrook-pressure").innerHTML = "Pressure Index: " + `${getSeabrookPressure}` + " hpa";
  document.getElementById("seabrook-humidity").innerHTML = "Humidity Index: " + `${getSeabrookHumidity}` + " %"

};

// Seabrook data
fetch('http://api.openweathermap.org/data/2.5/weather?q=Houston,us&apiKey=33f578ee2ce36da02936c7f90dbdb8fa&units=imperial')
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


const options = {
  key: 'U5ky6EE5qJsURIDNwoCeMUqVPxkQDrCb', // REPLACE WITH YOUR KEY !!!
  lat: 29.5641,
  lon: -95.0255,
  zoom: 9,
};

windyInit(options, windyAPI => {
  const { picker, utils, broadcast } = windyAPI;
  
  
  picker.on('pickerOpened', latLon => {
      // picker has been opened at latLon coords
      console.log(latLon);

      const { lat, lon, values, overlay } = picker.getParams();
      // -> 50.4, 14.3, 'wind', [ U,V, ]
      console.log(lat, lon, values, overlay);

      const windObject = utils.wind2obj(values);
      console.log(windObject);
  });

  picker.on('pickerMoved', latLon => {
      // picker was dragged by user to latLon coords
      console.log(latLon);
  });

  picker.on('pickerClosed', () => {
      // picker was closed
  });
  
  // Wait since weather is rendered
 

  const overlays = ['rain', 'wind', 'temp', 'clouds'];
  let i = 0;
  
      setInterval(() => {
          i = i === 3 ? 0 : i + 1;
          store.set('overlay', overlays[i]);
          }, 3000);
          broadcast.once('redrawFinished', () => {
              picker.open({ lat: 29.5641, lon: -95.0255 });
              // Opening of a picker (async)
  });
});