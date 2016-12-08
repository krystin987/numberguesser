var guess = document.getElementById('user-guess');
var guessButton = document.getElementById('user-guess-button');
var inputDisplay = document.getElementById('user-input-display');
var response = document.getElementById('guess-response');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset');
var rng = Math.floor((Math.random() * 100))%100  + 1;
var userMin = document.getElementById('user-min');
var userMax = document.getElementById('user-max');
var chooseButton = document.getElementById('choose');

guessButton.addEventListener('click', function () {
  onScreenGuess();
  // console.log(userMin);
});

clearButton.addEventListener('click', function () {
  clearField();
  clearButton.disabled = true;
});

resetButton.addEventListener('click', function(){
  clearField();
  // randomNumber();
  resetButton.disabled = true;
});

guess.addEventListener('keyup', function(){
  if(guess.value === "") {
    clearButton.disabled = true;
    resetButton.disabled = true;
  } else {
    clearButton.disabled = false;
    resetButton.disabled = false;
  }
});

window.onload = function (){
  console.log(rng);
  clearButton.disabled = true;
  resetButton.disabled = true;
}

// chooseButton.addEventListener('click', function) {
//   randomNumber=
//   getMinimum
//

function onScreenGuess () {
  var display = guess.value;
  var num = parseInt(guess.value);

  inputDisplay.innerText = display;

  if (num === rng) {
    response.innerText = "BOOM!";
  } else if (num > 100 || num < 1){
    alert("Out of range! Please, pick a number between 1 and 100.");
  } else if (num < rng) {
    response.innerText = "That's too low!";
  } else if (num > rng){
    response.innerText="That's too high!";
 } else {
 }
}

function clearField (){
  var clear="";
  inputDisplay.innerText = clear;
  guess.value=clear;
  // userMin.value = "";
  // userMax.value="";
}

// function randomNumber (){
//   // minimum = getMinimum();
//   // maximum = getMaximum();
//   // return Math.floor(Math.random() * (minimum * maximum)) + minimum;
// }

// function getMinimum () {
//   if ((document.getElementById('user-min').value) === "") {
//     return 1;
//     console.log('this');
//   } else {
//     return Number(document.getElementById('user-min').value) }
//     console.log('got it');
//   }


// function getMaximum() {
//   var max = userMax.value;
//   var userNum = parseInt(userMax.value);
//   return userNum;



// junk from function randomNumber
  // var inputMin = userMin.value;
  // console.log(inputMin);
  // userMin.innerText = inputMin;
