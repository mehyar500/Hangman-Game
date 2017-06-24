var wordsArray = [
["T", "R", "E", "E", "H", "O", "U", "S", "E"],
  ["J","A","V","A","S","C","R","I","P","T"],
  ["W","E","B","D","E","S","I","G","N"],
  ["E","D","U","C","A","T","I","O","N"],
  ["C","H","O","C","O","L","A","T","E"],
  ["S","Y","R","I","A"]
]
var random = Math.floor((Math.random()*(wordsArray.length-1))); 

var wordToGuess = wordsArray[random]; // the word to guess will be chosen from the array above
var gWord = new Array(wordToGuess.length);
var wrongLetter = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < gWord.length; i++){
  gWord[i] = "_ ";
}

// prints the guessfield
function printGuess(){
  for (var i = 0; i < gWord.length; i++){
  var guessfield = document.getElementById("guessfield");
  var letter = document.createTextNode(gWord[i]);
  guessfield.appendChild(letter);
  }
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var guessInput = function(){
  var a = document.guessPanel; 
  var b = a.elements["guessed"]; 
  var userLetter = b.value; // the letter provided by the user
  userLetter = userLetter.toUpperCase();
  for (var i = 0; i < wordToGuess.length; i++){
    if(wordToGuess[i] === userLetter){
      gWord[i] = userLetter + " ";
      var letterGuessed = true;
    }
  b.value = "";
  }
  
  //deletes the guessfield and replaces it with the new one
  var guessfield = document.getElementById("guessfield");
  guessfield.innerHTML=""; 
  printGuess();
  
  // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
  if(!letterGuessed){
    var wrongLetters = document.getElementById("wrongLetters");
    var letter = document.createTextNode(" " + userLetter);
    wrongLetters.appendChild(letter); 
    wrongLetter++;
    var hangman = document.getElementById("hangman");
    hangman.src = "assets/images/" + wrongLetter + ".png";
  }
  
  //checks if all letters have been found
  var checkLetters = true;
  for (var i = 0; i < gWord.length; i++){
    if(gWord[i] === "_ "){
      checkLetters = false;
    }
  }
  if(checkLetters){
    window.alert("You win!");
  }
  
  //once you got six wrong letters, you lose
  if(wrongLetter === 6){
    window.alert("Uh...I guess you're dead now.");
  }
}

function init(){
  printGuess();
}

window.onload = init;