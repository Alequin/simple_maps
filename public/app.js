
function initialize(){
  center = {lat:0, lng:0}
  var mainMap = new MapWrapper();
  navigator.geolocation.getCurrentPosition(mainMap.setPos.bind(mainMap), function(){
    alert("fail");
  });
  mainMap.addMarker(center);
  mainMap.addClickEvent();

  var bounceButton = document.querySelector("#button-bounce-markers");
  bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));
}

window.addEventListener("load", initialize);
