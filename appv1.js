var locations = [
    ['Sea Wolf Park', 29.3344, -94.7796, ],
    ['Texas City Dike', 29.3898, -94.8855],
    ['Surfside Jetty', 28.9392, -95.2968],
    ['Galveston Jetty', 29.4720, -94.7692],
    ['Bolivar Peninsula', 29.4783, -94.5799]
];
function initMap() {
    var myOptions = {
        center: new google.maps.LatLng(29.7604, -95.3698), 
        zoom: 11,
    };
    var map = new google.maps.Map(document.getElementById("default"),
        myOptions);
  setMarkers(map, locations);
}

function setMarkers(map, locations){

    // var image = 'https://www.nps.gov/maps/tools/symbol-library/assets/img/ice-fishing-black-22.svg';
    var marker, i
    for (i = 0; i < locations.length; i++) {  
        var spot = locations[i][0]
        var lat = locations[i][1]
        var long = locations[i][2]
        
        latlngset = new google.maps.LatLng(lat, long);
        
        var marker = new google.maps.Marker({
        position: latlngset,
        map: map,
        icon: image,
        });
        map.setCenter(marker.getPosition())
        
        var content = loan
        
        var infowindow = new google.maps.infowindow()
        google.maps.event.addListener(marker, 'click', function(marker, content, infowindow){
        return function() {
            infowindow.setCenter(content);
            infowindow.open(map,marker);
        };
        })(marker, content, infowindow);
    }
}
  
