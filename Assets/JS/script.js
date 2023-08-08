// TODO: Add code to display the current date in the header of the page.
$('#currentDay').text(dayjs().format('dddd MMMM, DD'));

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {


  // TODO: Add a listener for click events on the save button.
  // saves the textarea information into the local storage based on the data index.
  $('.saveBtn').on('click', function(){
    var dataIndex = $(this).attr("data-index");
    var txtVal = $(`#area${dataIndex}`).val();
    console.log(txtVal);
    localStorage.setItem(dataIndex,JSON.stringify(txtVal))
  })
  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  //  How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  for (var index = 0; index < 9; index++) {
    $(`#hour-${index + 9} textarea`).val(JSON.parse(localStorage.getItem(index)))
  }
    
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  var hour = dayjs().format('HH');
  var timeBlocks = $('.time-block');
  for (var index = 0; index < timeBlocks.length; index++) {

    if (parseInt(timeBlocks[index].id.split('-')[1]) == hour) {
    timeBlocks[index].classList.add('present')
  }
  if (parseInt(timeBlocks[index].id.split('-')[1]) < hour) {
    timeBlocks[index].classList.add('past')
  }
  if (parseInt(timeBlocks[index].id.split('-')[1]) > hour) {
    timeBlocks[index].classList.add('future')
  }};
  
  
  
})