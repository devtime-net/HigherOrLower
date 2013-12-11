var number = -1;
var attempts = -1;
function generateNumber() {
     number = Math.floor((Math.random()*100)+1); // Between 0-100
	 attempts = 6;
	 setGameVisibility(true);
};

function setGameVisibility(isVisible){
	 var game = document.getElementById("Game");
	 var startButton = document.getElementById("StartButton");
	 var hintLabel = document.getElementById("Hint");
	 if (isVisible) {
		game.setAttribute('style','display:block');
		startButton.setAttribute('style','display:none');
		hintLabel.textContent = "Enter number between 0-100"
	 } else {
		game.setAttribute('style','display:none');
		startButton.setAttribute('style','display:block');
		var guessTextBox = document.getElementById("GuessValue");
		guessTextBox.value = "";
		hintLabel.textContent = ""
	}
}
function isCorrectGuess() { 
	 if (attempts <= 0) {
		alert('Game Over');
		setGameVisibility(false);
		return;
	 }
 

	 var guessTextBox = document.getElementById("GuessValue");	 
	 var guess = guessTextBox.value;
	 var hintLabel = document.getElementById("Hint");
	 if ((Number(guess) == NaN) || guess > 100 || guess < 0){
		hintLabel.textContent = "(" + guess + ") Enter number between 0-100";
		return;
	 };
	 attempts--;
	 
     if (guess == number) {
	      alert("Woohoo! You Win!");
		  setGameVisibility(false);
	 } else if (guess < number) {
		  hintLabel.textContent = "(" + guess + ") Higher. " + attempts + " attempts left";
	 } else {
		  hintLabel.textContent = "(" + guess + ") Lower. " + attempts + " attempts left";
	 }
};