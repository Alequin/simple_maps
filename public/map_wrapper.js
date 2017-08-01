

function MapWrapper(){
  var container = document.querySelector("#main-map");
  this.googleMap = new google.maps.Map(container, {
    center: {lat: 0, lng: 0},
    zoom: 15,
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords){
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
  });

  var infoWindow = new google.maps.InfoWindow({
    content: coords.lat + " / " + coords.lng,
  });

  marker.addListener("click", function(){
    infoWindow.open(this.googleMap, this);
  })

  this.markers.push(marker);
};

MapWrapper.prototype.setCurrentPosition = function(nav){
  nav.geolocation.getCurrentPosition(this.setPos.bind(this));
}

MapWrapper.prototype.setPos = function(position){
  var container = document.querySelector("#main-map");
  this.googleMap.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
};

MapWrapper.prototype.addClickEvent = function(){
  var current = this;
  google.maps.event.addListener(this.googleMap, "click", function(event){
    var position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }
    current.addMarker(position);
  })
};

MapWrapper.prototype.bounceMarkers = function(){
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });
};

MapWrapper.prototype.centerAt = function(position){
  this.googleMap.setCenter(position);
};
