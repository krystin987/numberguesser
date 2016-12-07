var guess = document.getElementById('user-guess');
var guessButton = document.getElementById('user-guess-button');
var inputDisplay = document.getElementById('user-input-display');
var clearButton = document.getElementById('clear-button');
var rng = Math.floor(Math.random()*100);

guessButton.addEventListener('click', function () {
  onScreenGuess();
});

clearButton.addEventListener('click', function () {
  clearField();

});

function onScreenGuess () {
  var display = guess.value;
  console.log('hi');
  inputDisplay.innerText = display;
}

function clearField (){
  var clear="";
  inputDisplay.innerText = clear;
  console.log('BYE');
}

function getRandom() {
  return Math.floor(Math.random()*100);
}
