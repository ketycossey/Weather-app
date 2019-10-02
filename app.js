// On load will initialize map with array of locations
const tempElement = document.getElementById("content").innerHTML="Where's my damn weather info";
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
      zoom: 10,
      center: center
    });
    // Fish icon for marker
  var image = 'https://www.nps.gov/maps/tools/symbol-library/assets/img/ice-fishing-black-22.svg';  
//   Display popup window when user clicks on marker

//   var contentString = `${tempElement}`;

  var infoWindow =  new google.maps.InfoWindow({
    //   content: contentString
     
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
        }
      })(marker, count));
    
    }
}


fetch('http://api.openweathermap.org/data/2.5/weather?q=Seabrook,us&apiKey=33f578ee2ce36da02936c7f90dbdb8fa&units=imperial')
  .then(function(response){
      let data = response.json();
      return data;
  })
  .then(function(data){
    getTemp = data.main.temp
    console.log(data.main.temp)
  })
  .then(function(){
      displayWeather();
  });

 function displayWeather(){
     tempElement.innerHTML = getTemp;
 };

