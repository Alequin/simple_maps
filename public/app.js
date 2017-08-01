
function initialize(){
  center = {lat:0, lng:0}
  var mainMap = new MapWrapper();
  mainMap.setCurrentPosition(navigator);
  mainMap.addMarker(center);
  mainMap.addClickEvent();

  var bounceButton = document.querySelector("#button-bounce-markers");
  bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  var goToSelect = document.querySelector("#go-to-select");
  var goToButton = document.querySelector("#go-to-button");
  goToButton.addEventListener("click", function(){

    var pos = {lat: 0, lng: 0};

    switch (goToSelect.value) {
      case "New York":
        pos.lat = 40.710516;
        pos.lng = -74.012366;
        break;

      case "Code Clan":
        pos.lat = 55.94698904704583;
        pos.lng = -3.201913833618164;
        break;

      case "Paris":
        pos.lat = 48.864070;
        pos.lng = 2.351425;
        break;
    }

    mainMap.centerAt(pos);
  });
}

window.addEventListener("load", initialize);
