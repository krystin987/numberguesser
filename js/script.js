var guess = document.getElementById('user-guess');
var guessButton = document.getElementById('user-guess-button');
var inputDisplay = document.getElementById('user-input-display');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset');
var rng = Math.floor((Math.random() * 100))%100  + 1;


guessButton.addEventListener('click', function () {
  onScreenGuess();
  var num = parseInt(guess.value);
  if (num === rng) {
    console.log('BOOM!');
  } else if (num > 100 || num < 1){
    console.log('What do you think you are doing?!');
  } else if (num < rng) {
    console.log('That is too low!');
  } else if (num > rng){
    console.log('That is too high!')
}});

clearButton.addEventListener('click', function () {
  clearField();
});

resetButton.addEventListener('click', function(){
  clearField();
})

function onScreenGuess () {
  var display = guess.value;
  console.log('hi');
  inputDisplay.innerText = display;
}

function clearField (){
  var clear="";
  inputDisplay.innerText = clear;
  guess.value=clear;
  console.log('BYE');
}
