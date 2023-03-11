let userName="neHa";

let firstLetter=userName.slice(0,1);
let lastLetters=(userName.slice(1,userName.length)).toLowerCase();




(firstLetter.charCodeAt() >=97) ? firstLetter=firstLetter.toUpperCase() : "";

console.log(firstLetter+lastLetters);
 
