var guess = document.getElementById('user-guess');
var guessButton = document.getElementById('user-guess-button');
var inputDisplay = document.getElementById('user-input-display');
var response = document.getElementById('guess-response');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset');
var rng = Math.floor((Math.random() * 100))%100  + 1;
var userMin = document.getElementById('user-min');
var userMax = document.getElementById('user-max');

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
  console.log(rng);
  clearButton.disabled = true;
  resetButton.disabled = true;
}

function onScreenGuess () {
  var display = guess.value;
  inputDisplay.innerText = display;
  var num = parseInt(guess.value);
  if (num === rng) {
    response.innerText = "BOOM!";
  } else if (num > 100 || num < 1){
    alert("Out of range! Please, pick a number between 1 and 100.");
  } else if (num < rng) {
    response.innerText = "That's too low!";
  } else if (num > rng){
    response.innerText="That's too high!"
 }
}

function clearField (){
  var clear="";
  inputDisplay.innerText = clear;
  guess.value=clear;
}

// function randomNumber (){
//   minimum = getMinimum;
//   maximum = getMaximum;
//   return Math.floor((Math.random() * (minimum * maximum)) + minimum;
// }

function getMinimum () {
  var min = userMin.value;
  var userNum = parseInt(userMin.value);
  console.log('hi');
}

function getMaximum() {

}
