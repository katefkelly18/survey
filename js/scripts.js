$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name = $("input#name").val();
    var food = $("input:radio[name=food]:checked").val();
    var favoriteMusic = $("input#music").val();
    var favoriteColor = $("input#color").val();
    var dob = $("input#born").val();

    $("#name").text(input#name);
    $("#food").text(input#food);
    $("#music").text(input#music);
    $("#color").text(input#color);
    $("#born").text(input#born);

    $("#story").show();

    event.preventDefault();
  });
});
