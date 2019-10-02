// This example displays a marker at the center of Australia.

function initMap() {
    const tempElement = document.getElementById("content").innerHTML="#";

    var houston = {lat: 29.5641, lng: -95.0255};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 29.5641, lng: -95.0255}
    });
    var contentString = `${tempElement}`;
    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });
  
    var marker = new google.maps.Marker({
      position: houston,
      map: map,
    });
    marker.addListener('click', () => {

        infoWindow.open(map, marker);
        // getWeather();
    });
  
}

// function getWeather(){
//     const proxy = `https://cors-anywhere.herokuapp.com/`
//     const api = `${proxy}https://api.darksky.net/forecast/c397db58c2152fa3ad7ffe6f4739dc79/29.5641,-95.0255`;
   
//             console.log(data);
     
//     }
        //     const {temperature, summary, icon, dewPoint, uvIndex, windSpeed} = data.currently;
        // });