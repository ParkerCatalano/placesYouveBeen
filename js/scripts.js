//business logic
function Place(location) {
  this.placeLocation = location;
  this.attributes = [];
}
function Attribute(landmark, weather, notes) {
  this.landmark = landmark;
  this.weather = weather;
  this.notes = notes;
}

// user interface logic
$(document).ready(function() {

  $("#add-attribute").click(function() {
  $("#new-attributes").append('<div class="new-attribute">' +
                               '<div class="form-group">' +
                                 '<label for="new-landmark">Landmark</label>' +
                                 '<input type="text" class="form-control new-landmark">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-weather">Weather</label>' +
                                 '<input type="text" class="form-control new-weather">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-notes">Notes</label>' +
                                 '<input type="text" class="form-control new-notes">' +
                               '</div>' +
                             '</div>');
});
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#new-place-location").val();

    var newPlace = new Place(inputtedPlace);

    $(".new-attribute").each(function() {
   var inputtedLandmark = $(this).find("input.new-landmark").val();
   var inputtedWeather = $(this).find("input.new-weather").val();
   var inputtedNotes = $(this).find("input.new-notes").val();
   var newAttribute = new Attribute(inputtedLandmark, inputtedWeather, inputtedNotes)
   newPlace.attributes.push(newAttribute)
 });

    $("ul#places").append("<li><span class='place'>" newPlace.placeLocation"</span></li>");


    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeLocation);
      $(".new-place").text(newPlace.placeLocation);
      $("ul#attributes").text("");
newPlace.attributes.forEach(function(attribute) {
  $("ul#attributes").append("<li>" + attribute.landmark + ", " + attribute.weather + " " + attribute.notes + "</li>");
});
    });

    $("input#new-place").val("");

  });
});
