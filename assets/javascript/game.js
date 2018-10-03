//Variables

//Array of words

var characterNames = [
"Ceil Phantomhive",
"Sebastian",
"Undertaker",
"Grell Sutcliff",
"Maes Hughes",
"Roy Mustang",
"Alphonse Elric",
"Edward Elric",
"Touka Kirishima",
"Juuzou Suzuya",
"Kaneki",
"Hideyoshi Nagachika",
"Shizou Heiwajima",
"Izaya Orihara",
"Celty Sturluson",
"Shinra Kishitani",
"Black Star",
"Death the Kid",
"Soul Eater",
"Maka Albarn",
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

//Display the following on the page:

    //Press any key to get started!

    //Wins: (# of times user guessed the word correctly).

   //If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

   //As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

    //Number of Guesses Remaining: (# of guesses remaining for the user).

    //Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

    //After the user wins/loses the game should automatically choose another word and make the user play it