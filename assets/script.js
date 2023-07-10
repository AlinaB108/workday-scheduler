//Adding a current date in the header of the page
//Might need to put it into the function
var todayDate = dayjs();
$('#currentDay').text(todayDate.format('MMM D, YYYY'));

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Added $(this) to tell JS I need to save a text from this particular field of text
  $(".saveBtn").on('click', function(event) {
  event.preventDefault();
    // Used $(this).children to get the children of the parent element
    var text = $(this).children(".description").val();
    //Used $(this).parent to set the parent element which is id in this case (we have only one ID in this document)
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,text);
    //For now the value is undefined
})
  // How might the id be useful when saving the description in local storage?
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //If statememnt to compare timeBlock time to current hour. Need to add some info before this statement!
  //Might need to make it a LOOP!
  
  // var timeBlock = $(this).attr('id');
  // if (timeBlock < todayDate) {
  //   $(this).removeClass("future");
  //   $(this).removeClass("present");
  //   $(this).addClass("past");
  // } else if (timeBlock == todayDate) {
  //   $(this).removeClass("past");
  //   $(this).removeClass("future");
  //   $(this).addClass("present");
  // } else {
  //   $(this).removeClass("past");
  //   $(this).removeClass("present");
  //   $(this).addClass("future");
  // };

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});