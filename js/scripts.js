//business logic
  function Place(location) {
    this.location = location;
    this.attributes = [];
  }
  function Attributes(landmark, season, notes) {
    this.landmark = landmark;
    this.season = season;
    this.notes = notes;
  }

// user interface logic
  $(document).ready(function() {

    $("#add-attributes").click(function() {
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

      var inputtedPlaceLocation = $("input#new-place-location").val();

      var newPlace = new Place(inputtedPlaceLocation);

      $(".new-attribute").each(function() {
     var inputtedLandmark = $(this).find("input.new-landmark").val();
     var inputtedWeather = $(this).find("input.new-weather").val();
     var inputtedNotes = $(this).find("input.new-notes").val();
     newPlace.attributes.push(newAttribute)
  });

     $("ul#attributes").append("<li><span class='new-place-location'>" + newPlace.location + " " + newPlace.attributes + "</span></li>");


      $(".attributes").last().click(function() {
        $("#show-place").show();
        $("#show-place h2").text(newPlace.location);
        $(".new-place-location").text(newPlace.location);
        $(".new-place-landmark").text(newPlace.landmark);
        $("ul#addresses").text("");
  newPlace.location.forEach(function(place) {
    $("ul#attributes").append("<li>" + attribute.landmark + attribute.season + attribute.notes + "</li>");
  });
      });

      $("input#new-place-location").val("");

    });
  });
