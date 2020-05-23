var dateElement = document.getElementById('date');
var saveElements = document.getElementsByClassName('save');
var contentElements = document.getElementsByClassName('content');
// select all content fields
var nineAM = document.getElementById('9am');
var tenAM = document.getElementById('10am');
var elevenAM = document.getElementById('11am');
var twelvePM = document.getElementById('12pm');
var onePM = document.getElementById('1pm');
var twoPM = document.getElementById('2pm');
var threePM = document.getElementById('3pm');
var fourPM = document.getElementById('4pm');
var fivePM = document.getElementById('5pm');

var saveNine = document.getElementById('saveNine');
var saveNineField = () => {
  var nineAMText = nineAM.value;
  localStorage.setItem("nine", nineAMText);
  console.log(localStorage.getItem("nine"));
}
saveNine.addEventListener("click", saveNineField);

var saveTen = document.getElementById('saveTen');
var saveTenField = () => {
  var tenAMText = tenAM.value;
  localStorage.setItem("ten", tenAMText);
  console.log(localStorage.getItem("ten"));
}
saveTen.addEventListener("click", saveTenField);

var saveEleven = document.getElementById('saveEleven');
var saveElevenField = () => {
  var elevenAMText = elevenAM.value;
  localStorage.setItem("eleven", elevenAMText);
  console.log(localStorage.getItem("eleven"));
}
saveEleven.addEventListener("click", saveElevenField);

var saveTwelve = document.getElementById('saveTwelve');
var saveTwelveField = () => {
  var twelvePMText = twelvePM.value;
  localStorage.setItem("twelve", twelvePMText);
}
saveTwelve.addEventListener("click", saveTwelveField);

var saveOne = document.getElementById('saveOne');
var saveOneField = () => {
  var onePMText = onePM.value;
  localStorage.setItem("one", onePMText);
  console.log(localStorage.getItem("one"));
}
saveOne.addEventListener("click", saveOneField);

var saveTwo = document.getElementById('saveTwo');
var saveTwoField = () => {
  var twoPMText = twoPM.value;
  localStorage.setItem("two", twoPMText);
  console.log(localStorage.getItem("two"));
}
saveTwo.addEventListener("click", saveTwoField);

var saveThree = document.getElementById('saveThree');
var saveThreeField = () => {
  var threePMText = threePM.value;
  localStorage.setItem("three", threePMText);
  console.log(localStorage.getItem("three"));
}
saveThree.addEventListener("click", saveThreeField);

var saveFour = document.getElementById('saveFour');
var saveFourField = () => {
  var fourPMText = fourPM.value;
  localStorage.setItem("four", fourPMText);
  console.log(localStorage.getItem("four"));
}
saveFour.addEventListener("click", saveFourField);

var saveFive = document.getElementById('saveFive');
var saveFiveField = () => {
  var fivePMText = fivePM.value;
  localStorage.setItem("five", fivePMText);
  console.log(localStorage.getItem("five"));
}
saveFive.addEventListener("click", saveFiveField);


var toDoList = [];

var initPlanner = () => {
    updateContent();
    getDateAndTime();
    checkTimes();
}

// function to display date and time at top of page
var getDateAndTime = () => {
  var dateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
  dateElement.innerHTML = dateAndTime;
}

var updateContent = () => {
  nineAM.innerHTML = localStorage.getItem("nine");
  tenAM.innerHTML = localStorage.getItem("ten");
  elevenAM.innerHTML = localStorage.getItem("eleven");
  twelvePM.innerHTML = localStorage.getItem("twelve");
  onePM.innerHTML = localStorage.getItem("one");
  twoPM.innerHTML = localStorage.getItem("two");
  threePM.innerHTML = localStorage.getItem("three");
  fourPM.innerHTML = localStorage.getItem("four");
  fivePM.innerHTML = localStorage.getItem("five");
}

var checkTimes = () => {
  var currentTime = moment().hour();
  if (currentTime >= 9 && currentTime < 10) {
    nineAM.style.background = "#fa6c14";
  }
  else if (currentTime >= 10 && currentTime < 11) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "#fa6c14";
  }
  else if (currentTime >= 11 && currentTime < 12) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "#fa6c14";
  }
  else if (currentTime >= 12 && currentTime < 13) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "#fa6c14";
  }
  else if (currentTime >= 13 && currentTime < 14) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "#fa6c14";
  }
  else if (currentTime >= 14 && currentTime < 15) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "#fa6c14";
  }
  else if (currentTime >= 15 && currentTime < 16) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "lightgrey";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "#fa6c14";
  }
  else if (currentTime >= 16 && currentTime < 17) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "lightgrey";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "lightgrey";
    threePM.setAttribute("readonly", true);
    fourPM.style.background = "#fa6c14";
  }
  else if (currentTime >= 17 && currentTime < 18) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "lightgrey";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "lightgrey";
    threePM.setAttribute("readonly", true);
    fourPM.style.background = "lightgrey";
    fourPM.setAttribute("readonly", true);
    fivePM.style.background = "#fa6c14";
  }
  else if (currentTime >= 18) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "lightgrey";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "lightgrey";
    threePM.setAttribute("readonly", true);
    fourPM.style.background = "lightgrey";
    fourPM.setAttribute("readonly", true);
    fivePM.style.background = "lightgrey";
    fivePM.setAttribute("readonly", true);
  }

}