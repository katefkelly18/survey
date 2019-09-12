$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name = $("input#name").val();
    var food = $("input:radio[name=food]:checked").val();
    var music = $("#music").val();
    var color = $("#color").val();
    var dob = $("#born").val();

    $(".name").text(name);
    $(".food").text(food);
    $(".music").text(music);
    $(".color").text(color);
    $(".born").text(dob);

    $("#story").show();

    event.preventDefault();
  });
});
