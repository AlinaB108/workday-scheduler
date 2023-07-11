$(function () {
  //A button function with event listener
  $(".saveBtn").on('click', function() {
    // var saveText = $('#saveText');
    // var textLine = $('<p>');
    // textLine.text('Appointment added to Local storage');
    // saveText.append(textLine);

    //Added $(this) to save text from the particular line of text where we click save button
    var time = $(this).parent().attr("id").split('-')[1];
    var text = $(this).parent().find(".description").val();

    localStorage.setItem(time,text);
});  

  var currentTime = dayjs().format('HH');
  //Used .each function to loop through each element
  $(".time-block").each(function () {
    var timeBlock = ($(this).attr("id").split('-')[1]);

    //Shows the saved text we added to local storage
    var textField = localStorage.getItem(timeBlock);
    var textArea = $(this).find('.description');
    textArea.val(textField);

    if (timeBlock < currentTime) {
      $(this).find('.description').addClass("past");
    }
    else if (timeBlock == currentTime) {
      $(this).find('.description').addClass("present");
    }
    else {
      $(this).find('.description').addClass("future");
    }
  });

  //Added code to display time on top of the page
  var todayDate = dayjs();
  $('#currentDay').text(todayDate.format('MMM D, YYYY'));
});