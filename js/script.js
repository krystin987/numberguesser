
// These are elements in the DOM
var guess        = document.getElementById('user-guess');
var guessButton  = document.getElementById('user-guess-button');
var inputDisplay = document.getElementById('user-input-display');
var response     = document.getElementById('guess-response');
var clearButton  = document.getElementById('clear-button');
var resetButton  = document.getElementById('reset');
/*
var userMin = document.getElementById('user-min');
var userMax = document.getElementById('user-max');
*/

Math.randBetween = function(min, max, asFloat){
  var r = Math.random()*(max-min)+min;
  // This is the terniary operator:
  return asFloat ? r : Math.round(r);
  // it reads "if asFloat, then r, else Math.round(r)
}

// This is an integer
var randomValue = Math.randBetween(1, 100);

// This is an array
var alreadyGuessed = Array(100+1);
alreadyGuessed.fill(0);

guessButton.addEventListener('click', function() {
  setResponse(parseGuess(parseInt(guess.value) ));
});

clearButton.addEventListener('click', function () {
  clearField();
  guess.value = "";
  setDisplay("");
  clearButton.disabled = true;
});

// clearField is a function... when clearField is used, it's not called, like so:
resetButton.addEventListener('click', clearField);

guess.addEventListener('keyup', function() {
  clearButton.disabled = (guess.value == "");
});


window.onload = function () {
  console.log("Spoiler! the random value is "+randomValue);
  clearButton.disabled = true;
  resetButton.disabled = true;
}

function parseGuess(n) {
  if (n < 1 || 100 < n) {
    alert("Out of range! Please, pick a number between 1 and 100.");
    return "Try again";
  }
  if (alreadyGuessed[n])
    return "You already guessed "+n+"! Go home!";
  setDisplay(n);
  alreadyGuessed[n] += 1;
  if (n == randomValue) {
    return "BOOM!";
  } else if (Math.abs(n - randomValue) < 3) {
    return "You're getting warmer!";
  } else if (n < randomValue) {
    return "That's too low!";
  } else if (randomValue < n) {
    return "That's too high!";
  }
  return "How did I get here?";
}

function setResponse(text) {
  response.innerText = text;
}

function setDisplay(n) {
  inputDisplay.innerText = n;
}

function clearField (){
  setDisplay("");
  guess.value="";
}

/*
function getMinimum () {
  return parseInt(userMin.value);
}

function getMaximum() {
  return parseInt(userMax.value);
}
*/
