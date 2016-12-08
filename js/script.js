
// These are elements in the DOM
var guess = document.getElementById('user-guess');
var guessButton = document.getElementById('user-guess-button');
var inputDisplay = document.getElementById('user-input-display');
var response = document.getElementById('guess-response');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset');
var userMin = document.getElementById('user-min');
var userMax = document.getElementById('user-max');

Math.randBetween = function (min,max,asFloat){
  var r = Math.random()*(max-min)+min;
  // This is the terniary operator:
  return asFloat ? r : Math.round(r);
  // it reads "if asFloat, then r, else Math.round(r)
}

// This is an integer
var randomValue = Math.randBetween(1, 100);

guessButton.addEventListener('click', function () {
  onScreenGuess();
  });

clearButton.addEventListener('click', function () {
  clearField();
  guess.value = "";
  inputDisplay.value = "";
  clearButton.disabled = true;

});

resetButton.addEventListener('click', function(){
  clearField();
})

guess.addEventListener('keyup', function(){
  if(guess.value === "") {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  }
});

// resetButton.addEventListener('click', function(){
//
// })

window.onload = function (){
  console.log(randomValue);
  clearButton.disabled = true;
  resetButton.disabled = true;
}

function onScreenGuess () {
  var display = guess.value;
  inputDisplay.innerText = display;
  var num = parseInt(guess.value);
  if (num === randomValue) {
    response.innerText = "BOOM!";
  } else if (num > 100 || num < 1){
    alert("Out of range! Please, pick a number between 1 and 100.");
  } else if (num < randomValue) {
    response.innerText = "That's too low!";
  } else if (randomValue < num){
    response.innerText="That's too high!"
 }
}

function clearField (){
  var clear="";
  inputDisplay.innerText = clear;
  guess.value=clear;
}

function getMinimum () {
  var min = userMin.value;
  var userNum = parseInt(userMin.value);
  console.log('hi');
}

function getMaximum() {

}
