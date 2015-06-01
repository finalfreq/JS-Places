"use strict";

// Places {name: location: season: year: description: x}
$(document).ready(function(){
  $(".input-group.date").datepicker({
      format: "yyyy", // Notice the Extra space at the beginning
      // viewMode: "years",
      minViewMode: 2
  });
});
