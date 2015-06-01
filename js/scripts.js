"use strict";

// Places {name: location: season: year: description: x}
$(document).ready(function(){
  $(".input-group.date").datepicker({
    format: "yyyy",
    minViewMode: 2
  });

  $("form#places-input").submit(function(event) {

    var name = $("input#name").val();
    var location = $("input#location").val();
    var season = $("input#season").val();
    var year = $("input#year").val();
    var description = $("textarea#description").val();

    var newPlace = {name: name, location: location, season: season, year: year, description: description};

    $("#places").show();

    $(".results").append("<li><span class='place'>" + newPlace.name + ", " + newPlace.location + "</span></li>");

    $("form#places-input").find("input").val('')
    $("form#places-input").find("textarea").val('')

    $(".place").last().click(function() {
      $("#place-info").show();
      $(".place-info h1").text(newPlace.name);
      $(".name").text(newPlace.name);
      $(".location").text(newPlace.location);
      $(".season").text(newPlace.season);
      $(".year").text(newPlace.year);
      $(".description").text(newPlace.description);

    });

    event.preventDefault();


  });
});
