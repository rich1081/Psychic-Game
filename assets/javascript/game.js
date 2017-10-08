//letters first

//gotta catch them all.




//list of letters
//list of letters
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

console.log(alphabets.length);

//variables needed are wins, losses, guesses left, guessses user has made. 
var wins = 0

var losses = 0

var guessesRemain = 9;

//what guesses did he user make
var guessesMade = [];

// This function is run whenever the user presses a key.
//document.onkeyup = function(event) 

document.onkeyup = function(event) {
	
//user chooses a letter by pressing the button
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//computer decides what it chooses like and is selecting from the array of alphabets list
var computerGuess = alphabets[Math.floor(Math.random()*alphabets.length)];



//pushes the guesses into the guessMade array
 guessesMade.push(userGuess);	

 console.log(computerGuess);
 console.log(userGuess);

if (userGuess === computerGuess) {

	wins++;

	guessesMade.length = 0
	console.log(guessesMade);

	guessesRemain = 9;

	alert("You Win!!! The letter was " + userGuess +" Great Guess");

	}

else if (guessesRemain == 0) {

	losses++;

	guessesMade.length = 0;
	
	guessesRemain = 9;

	alert("You Lose!!!");

}

else if (userGuess !==computerGuess) {

//Decrementing the guesses that remain.
	(guessesRemain--);

}

//Write the results when game is complete
var results =
"<p>Guess the correct letter</p>" +
"<p>Wins: " + wins + "</p>" + 
"<p>Losses: " + losses + "</p>" + 
"<p>Guesses Left: " + guessesRemain + "</p>" +
"<p>Your Guesses so far: " + guessesMade + "</p>";
	 
 document.querySelector('#game').innerHTML = results;

    
};
