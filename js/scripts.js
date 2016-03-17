//Business Logic\\

function Place(location, landmark, season, notes) {
  this.placeLocation = location;
  this.placeLandmark = landmark;
  this.placeSeason = season;
  this.placeNotes = notes;
}

Place.prototype.placeAttributes = function() {
  return this.placeLocation + " " + this.placeLandmark;  // body...
};

//User Interface Logic//
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

  var inputtedPlaceLocation = $("input#new-placeLocation").val();

  var newPlace = new Place(inputtedPlaceLocation);


  $("ul#placesYouveBeen").append("<li><span class='place'>" + newPlace.placeAttributes() + "</span></li>");

  $(".place").last().click(function() {
    $("#placesYouveBeen").show();
    $("#placesYouveBeen").text(newPlace.placeLocation);
    $("#placesYouveBeen").text(newPlace.placeLandmark);

  })

  })
})
