const letter = "abcdefghijklmnopqrstuwxys"
let arrayLetters = Array.from(letter);
//select the element
let lettersContainer = document.querySelector(".letters")

arrayLetters.forEach(letter =>{
let span = document.createElement("span");
let letters = document.createTextNode(letter);
span.appendChild(letters);
span.className = "letter-box";
lettersContainer.appendChild(span);
});