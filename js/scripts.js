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

  /$("#add-attributes").click(function() {
//  $("#new-attributes").append('<div class="new-attribute">' +
//                               '<div class="form-group">' +
//                                 '<label for="new-landmark">Landmark</label>' +
//                                 '<input type="text" class="form-control new-landmark">' +
//                               '</div>' +
//                               '<div class="form-group">' +
//                                 '<label for="new-weather">Weather</label>' +
//                                 '<input type="text" class="form-control new-weather">' +
//                               '</div>' +
//                               '<div class="form-group">' +
//                                 '<label for="new-notes">Notes</label>' +
//                                 '<input type="text" class="form-control new-notes">' +
//                               '</div>' +
//                             '</div>');
//});
//  $("form#new-contact").submit(function(event) {
///    event.preventDefault();

//    var inputtedFirstName = $("input#new-first-name").val();
//    var inputtedLastName = $("input#new-last-name").val();

//    var newContact = new Contact(inputtedFirstName, inputtedLastName);

//    $(".new-address").each(function() {
//   var inputtedStreet = $(this).find("input.new-street").val();
//   var inputtedCity = $(this).find("input.new-city").val();
//   var inputtedState = $(this).find("input.new-state").val();
//   newContact.addresses.push(newAddress)
 //});

//    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");


//    $(".contact").last().click(function() {
//      $("#show-contact").show();
//      $("#show-contact h2").text(newContact.firstName);
//      $(".first-name").text(newContact.firstName);
//      $(".last-name").text(newContact.lastName);
//      $("ul#addresses").text("");
//newContact.addresses.forEach(function(address) {
//  $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.state + "</li>");
//});
//    });

//    $("input#new-first-name").val("");
//    $("input#new-last-name").val("");

//  });
//});
