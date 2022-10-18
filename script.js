// Date and time
var todayDate = moment().format("dddd, MMM Do");
$("#currentDay").html(todayDate);

$(document).ready(function () {
  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, value);
    $(".hide").addClass("show");
    setTimeout(function () {
      $(".hide").removeClass("show");
    }, 5000);
  });

  function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // To check the time and add the classes for background indicators
      if (blockHour < timeNow) {
        $(this).addClass("past");
      } else if (blockHour === timeNow) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
        

  //Prevent Default
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
  }

  $("#current").text(moment().format("dddd, MMMM Do"));

  timeTracker();
});
