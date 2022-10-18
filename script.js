// Showing time in header
var DateAndTime = moment().format("dddd, MMMM Do");
$("#currentDay").text(DateAndTime);

function inputEl(event){
    event.preventDefault();


}
// Live time tracker
function timeTracker() {
    var carrentTime = moment().hour();

$(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

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
    }
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#h4pm .description").val(localStorage.getItem("4pm"));

}