//Adding a current date in the header of the page
//Might need to put it into the function
var todayDate = dayjs();
$('#currentDay').text(todayDate.format('MMM D, YYYY'));

$(function (workSchedule) {
  //A button function with event listener
  $(".saveBtn").on('click', function() {
    //Added $(this) to save text from the particular line of text where we click save button
    var time = $(this).parent().attr("id").split('-')[1];
    var text = $(this).parent().find(".description").val();

    localStorage.setItem(time,text);
});  
  //How can Day.js be used to get the current hour in 24-hour time?
  //Need to think about it!

  //Used .each function to loop through each element
  $(".time-block").each(function () {
    var timeBlock = ($(this).attr("id").split("hour")[1]);

    if (timeBlock < todayDate) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    else if (timeBlock === todayDate) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
});