//Variables

//Array of words

var characterNames = [
"ceil phantomhive",
"sebastian",
"undertaker",
"grell sutcliff",
"maes hughes",
"roy mustang",
"alphonse elric",
"edward elric",
"touka kirishima",
"juuzou suzuya",
"kaneki",
"hideyoshi nagachika",
"shizou heiwajima",
"izaya orihara",
"celty sturluson",
"shinra kishitani",
"black star",
"death the kid",
"soul eater",
"maka albarn",
];

var counter;
var wrong;
var correct;
var wordElement = document.getElementById('word');

var letterCountElement = document.getElementById("guesses")
var lettersGuessedElement = document.getElementById("guesses")


//Random Word

var randomWord = characterNames[Math.floor(Math.random()* characterNames.length)]



  
//Function to render word
function startGame(){
    counter = 20;
    wrong = [];
    correct = [];

    for (let i = 0; i < (randomWord.length); i++){
        correct.push('_');
    }
}
 console.log(randomWord)

 

//Use key events to listen for the letters that your players will type.
document.onkeyup = function(event) {

    var chosenLetter = event.key.toLowerCase();

  

    }


//one letter
 

//Display the following on the page:

    //Press any key to get started!

    //Wins: (# of times user guessed the word correctly).

   //If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
   

   //As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

    //Number of Guesses Remaining: (# of guesses remaining for the user).
  
    /* function charCount(){
    var counter = (20 - (userInput.length));
    var attemptChar = 
    var correctChar = [];*/

    


    //Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

    //After the user wins/loses the game should automatically choose another word and make the user play it