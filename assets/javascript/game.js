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
//Number Variables
var guessCounter = 15;
var wrongGuessCounter = 0;
var winCounter = 0;
var blanks = 0;



//Array Variables
var answerBlanks = [];
var wrongGuess = [];
var randomWord = "";
var lettersInRandomWord = [];

//HTML Variables
var wordElement = document.getElementById('word');
var letterCountElement = document.getElementById("guess-counter")
var lettersGuessedElement = document.getElementById("guesses")


function start() {
    //Game counter 
    guessCounter = 15;
    //Random Word
    randomWord = characterNames[Math.floor(Math.random() * characterNames.length)];
    lettersInRandomWord = randomWord.split("");
    blanks = lettersInRandomWord.length;

    //Function to render word blanks
        answerblanks = []
    for (let i = 0; i < randomWord.length; i++) {
        answerBlanks[i] = "_";
    }
    console.log(randomWord);
    //guess start empty
    wrongGuess = [];
    //renders html 
    wordElement.innerHTML = answerBlanks.join(" ");
    lettersGuessedElement.innerHTML = wrongGuess.join(" ");
    letterCountElement.innerHTML = guessCounter;
}
start()

function guessCheck(letter) {
    guessCounter--;

    letterInRandomWord = false;

    //if letter is in word replace letter into word
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] === letter) {
            letterInRandomWord = true;
        }
    }

    if (letterInRandomWord) {
        for (var j = 0; j < blanks; j++) {
            if (randomWord[j] === letter) {
                answerBlanks[j] = letter;
                wordElement.innerHTML = answerBlanks;
                console.log("correct: " + answerBlanks)
            }
        }

    }
    //if letter is not in the word

  else {
        guessCounter--;
        wrongGuess.push(letter);
        console.log("wrong: " + letter)
    }
}


//Use key events to listen for the letters that your players will type.
document.onkeyup = function (event) {

    var chosenLetter = event.key.toLowerCase();
    console.log(chosenLetter)
    guesses.innerHTML = chosenLetter

    guessCheck(chosenLetter)


}
//         //Win or Lose
//         function checkWin(){
//             if(correctGuess.indexOf(_)=== -1){
//                 alert('You Won!')
//             } 
//             else if (counter === 0 ){
//                 alert ('YOU LOST!');}
//         }


//    // if (chosenLetter === answer[x]) {
//        // for (var x = 0; x < randomWord.length; x++){
//          //   if (randomWord[x] === chosenLetter){
//            //     answer[x] = chosenLetter;
//       //      }
//     //    }
//   //  }

//     //else(counter <= 0 ); {

//         //location.reload(true)
//    // 

//     }


//Display the following on the page:

    //Press any key to get started!

    //Wins: (# of times user guessed the word correctly).

   //If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.


   //As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

    //Number of Guesses Remaining: (# of guesses remaining for the user)

    //Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

    //After the user wins/loses the game should automatically choose another word and make the user play it