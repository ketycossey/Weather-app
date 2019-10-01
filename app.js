// On load will initialize map with array of locations
function initMap() {
    const tempElement = document.getElementById("content").innerHTML=`sometext`;
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

  var contentString = `${tempElement}`;

  var infoWindow =  new google.maps.InfoWindow({
      content: contentString
     
  });
  var marker, count;
//   Iterates through locations array and display the locations & title on the map
  for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[count][1], locations[count][2]),
        map: map,
        icon: image,
        title: locations[count][0]
      });
    //   popup functionality when user click on marker for weather info
  google.maps.event.addListener(marker, 'click', (function (marker, count) {
        return function () {
        //   infowindow.setContent(locations[count][0]);
          infoWindow.open(map, marker);
        }
      })(marker, count));
    
    }
  }