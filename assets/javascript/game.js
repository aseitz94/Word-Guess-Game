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

var score = 0;
var wordindex = 0;

//Random Word

var randomWord = function() {
    return [Math.floor(math.random()* characterNames.length)]
}

var chosenWord = randomWord(characterNames);
console.log(chosenWord)

//Use key events to listen for the letters that your players will type.
document.onkeyup = function(event) {

    var userInput = event.key.toLowerCase();
}


//Display the following on the page:

    //Press any key to get started!

    //Wins: (# of times user guessed the word correctly).

   //If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
    if (chosenWord.length){
        document.write(chosenWord.findIndex)
    }
   //As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

    //Number of Guesses Remaining: (# of guesses remaining for the user).
    var counter = 9;
    var attemptChar = [];
    var correctChar = [];
    //Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

    //After the user wins/loses the game should automatically choose another word and make the user play it