const letter = "abcdefghijklmnopqrstuwxys";
let arrayLetters = Array.from(letter);
//select the element
let lettersContainer = document.querySelector(".letters");
// letters
arrayLetters.forEach((letter) => {
    let span = document.createElement("span");
    let letters = document.createTextNode(letter);
    span.appendChild(letters);
    span.className = "letter-box";
    lettersContainer.appendChild(span);
});

// category and words
const words = {
    programming: [
        "php",
        "javascript",
        "go",
        "scala",
        "fortran",
        "r",
        "mysql",
        "python",
    ],
    movies: [
        "Prestige",
        "Inception",
        "Parasite",
        "Interstellar",
        "Whiplash",
        "Memento",
        "Coco",
        "Up",
    ],
    people: [
        "Albert Einstein",
        "Hitchcock",
        "Alexander",
        "Cleopatra",
        "Mahatma Ghandi",
    ],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};
let allKeys = Object.keys(words);
// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
// Category
let randomPropName = allKeys[randomPropNumber];
// Category Words
let randomPropValue = words[randomPropName];
// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
// The Chosen Word
let randomValueValue = randomPropValue[randomValueNumber];

document.querySelector(".game-info .category span").innerHTML = randomPropName;
