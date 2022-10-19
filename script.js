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
        console.log(timeNow)
      }
       else if (blockHour === timeNow) {
        $(this).removeClass("past");
        $(this).addClass("present");
      }
       else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
}   
    var interval=setInterval(timeTracker, 60000)


  //Prevent Default
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  

  $("#current").text(moment().format("dddd, MMMM Do"));

  timeTracker();
});
