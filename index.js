// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
generateLetters();

// Object Of Words + Categories
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
};

// Get Random Word and Category
let { randomPropName, randomValueValue } = getRandomWordAndCategory(words);

// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);

// Create Spans Depended On Word
createWordSpans(lettersAndSpace);

// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts
let wrongAttempts = 0;

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

// Handle Clicking On Letters
document.addEventListener("click", handleLetterClick);

// Generate Letters
function generateLetters() {
  lettersArray.forEach(letter => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = 'letter-box';
    lettersContainer.appendChild(span);
  });
}

// Get Random Word and Category
function getRandomWordAndCategory(words) {
  let allKeys = Object.keys(words);
  let randomPropNumber = Math.floor(Math.random() * allKeys.length);
  let randomPropName = allKeys[randomPropNumber];
  let randomPropValue = words[randomPropName];
  let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
  let randomValueValue = randomPropValue[randomValueNumber];

  return { randomPropName, randomValueValue };
}

// Create Spans Depended On Word
function createWordSpans(lettersAndSpace) {
  lettersAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");
    if (letter === ' ') {
      emptySpan.className = 'with-space';
    }
    lettersGuessContainer.appendChild(emptySpan);
  });
}

// Handle Clicking On Letters
function handleLetterClick(e) {
  if (e.target.className === 'letter-box') {
    e.target.classList.add("clicked");

    let theClickedLetter = e.target.innerHTML.toLowerCase();
    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    let theStatus = checkLetterInWord(theClickedLetter, theChosenWord);

    if (!theStatus) {
      handleWrongAttempt();
    } else {
      document.getElementById("success").play();
    }
  }
}

// Check if Clicked Letter is in the Chosen Word
function checkLetterInWord(theClickedLetter, theChosenWord) {
  let theStatus = false;

  theChosenWord.forEach((wordLetter, WordIndex) => {
    if (theClickedLetter === wordLetter) {
      theStatus = true;
      guessSpans.forEach((span, spanIndex) => {
        if (WordIndex === spanIndex) {
          span.innerHTML = theClickedLetter;
        }
      });
    }
  });

  return theStatus;
}

// Handle Wrong Attempt
function handleWrongAttempt() {
  wrongAttempts++;
  theDraw.classList.add(`wrong-${wrongAttempts}`);
  document.getElementById("fail").play();

  if (wrongAttempts === 8) {
    endGame();
    lettersContainer.classList.add("finished");
  }
}

// End Game Function
function endGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);
  div.appendChild(divText);
  div.className = 'popup';
  document.body.appendChild(div);
}
