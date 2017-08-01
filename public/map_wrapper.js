

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
  this.markers.push(marker);
};

MapWrapper.prototype.setPos = function(position){
  var coords = {
    center: {lat: position.coords.latitude, lng: position.coords.longitude},
    zoom: 15,
  }
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