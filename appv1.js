// This example displays a marker at the center of Australia.


function initMap() {
    const tempElement = document.getElementById("content").innerHTML=``;
    var houston = {lat: 29.5641, lng: -95.0255};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 29.5641, lng: -95.0255}
    });
    var contentString = `${tempElement}`;
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
  
    var marker = new google.maps.Marker({
      position: houston,
      map: map,
    });
    marker.addListener('click', () => {
        infowindow.open(map, marker);

    });
  
}

