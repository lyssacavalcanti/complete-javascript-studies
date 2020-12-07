// Lecture - Values and Variables

const country = 'Brazil';
const continent = 'South America';
let population = 209500000;

console.log(country);
console.log(continent);
console.log(population);


// Lecture - Data Types

let isIsland = false;
let language = 

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);

// Let, Const and Var

language = 'Portuguese';
console.log(language);
isIsland = true;

// Basic Operators
console.log(population/2);
population++;
console.log(population);
let finlandiaPopulation = 6000000;
console.log(population < finlandiaPopulation);
console.log(population > 330000000);

let description = `${country} is in ${continent}, and it's ${population} people speak ${language}.`
console.log(description);

// Coding  Challenge #1

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95; 

const imcMark = massMark/ heightMark ** 2
console.log(imcMark);

const imcJohn = massJohn/ heightJohn ** 2;
console.log(imcJohn);

const markHigherIMC = imcMark > imcJohn;
console.log(markHigherIMC);

// Coding Challenge #2

let compareIMC;
if (imcJohn > imcMark) {
    compareIMC = `Jonh's IMC (${imcJohn}) is greater than Mark's IMC (${imcMark}).`; 
} else {
    compareIMC = `Mark's IMC (${imcMark}) is greater than Jonh's IMC (${imcJohn}).`;
}
console.log(compareIMC);