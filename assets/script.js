$(function () {
  $(".saveBtn").on('click', function() {
    //Added $(this) to save text from the particular line of text where we click save button
    var time = $(this).parent().attr("id").split('-')[1];
    var text = $(this).parent().find(".description").val();

    localStorage.setItem(time,text);

    var saveText = $('#saveText');
    var textLine = $('<p>');
    textLine.text('Appointment added to Local storage✅');
    saveText.append(textLine);

    textLine.delay(1500).fadeOut(1000, function() {
      textLine.remove();
    });
  });

  //Shows time in 24-hour time
  var currentTime = dayjs().format('HH');
  //Used .each function to loop through each element
  $(".time-block").each(function () {
    var timeBlock = ($(this).attr("id").split('-')[1]);

    //Shows the saved text we added to local storage
    var textField = localStorage.getItem(timeBlock);
    var textArea = $(this).find('.description');
    textArea.val(textField);

    //If statement; added '.description' to find this class in index.html
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

  var todayDate = dayjs();
  $('#currentDay').text(todayDate.format('MMM D, YYYY'));
});