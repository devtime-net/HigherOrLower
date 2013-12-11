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
	 
	 if (isVisible) {
		game.setAttribute('style','display:block');
		startButton.setAttribute('style','display:none');
	 } else {
		game.setAttribute('style','display:none');
		startButton.setAttribute('style','display:block');
		var guessTextBox = document.getElementById("GuessValue");
		guessTextBox.value = "";
	}
}
function isCorrectGuess() { 
	 if (attempts <= 0) {
		alert('Game Over');
		setGameVisibility(false);
		return;
	 }
     attempts--;
	 var guessTextBox = document.getElementById("GuessValue");	 
	 var guess = guessTextBox.value;
     if (guess == number) {
	      alert("Woohoo! You Win!");
		  setGameVisibility(false);
	 } else if (guess < number) {
		  alert('Higher');
	 } else {
		  alert('Lower');
	 }
};