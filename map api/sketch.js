// var map;
// var myPosition;

// function setup() { 
//   createCanvas(400, 400);
//   map = select('#map');
//   map.position(0,0);
//   myPosition = select('#map');

  
// } 


// function draw() { 
//   background(220);
// }

var mcdonaldsData = {
  "mcdonalds": [
    {
      "name": "McDonald's Chinatown Point",
      "lat": 1.284053,
      "lng": 103.843382
    },
    {
      "name": "McDonald's Bugis Junction",
      "lat": 1.300325,
      "lng": 103.855328
    },
    {
      "name": "McDonald's Raffles City",
      "lat": 1.293309,
      "lng": 103.853579
    },
    {
      "name": "McDonald's Orchard Cineleisure",
      "lat": 1.301741,
      "lng": 103.837647
    },
    {
      "name": "McDonald's Tampines Mall",
      "lat": 1.353254,
      "lng": 103.945285
    }
  ]
};

function initMap() {
  var uluru = { lat: 1.3521, lng: 103.8198 }; // Singapore's approximate center
  var map = new google.maps.Map(document.getElementById('map'), {
    center: uluru,
    zoom: 12
  });

  var infowindow = new google.maps.InfoWindow();

  for (var i = 0; i < mcdonaldsData.mcdonalds.length; i++) {
    var location = mcdonaldsData.mcdonalds[i];
    var latLng = new google.maps.LatLng(location.lat, location.lng);

    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: location.name
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(mcdonaldsData.mcdonalds[i].name);
        infowindow.open(map, marker);
      };
    })(marker, i));
  }
}

