// 'use strict';

// // JAVASCRIPT FUNDAMENTALS - Part 1

// // Lecture - Values and Variables

// // Exemplos de var, const e let 


//     var country = 'Brazil';
//     const continent = 'South America';
//     let population = 209500000;


// const capitalCity = 'Brasília';

// console.log(country);
// console.log(continent);
// console.log(population);


// // Lecture - Data Types

// let isIsland = false;
// let language = 

// console.log(typeof isIsland);
// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof language);

// // Let, Const and Var
// language = 'Portuguese';
// console.log(language);
// isIsland = true;

// // Basic Operators
// console.log(population/2);
// population++;
// console.log(population);
// let finlandiaPopulation = 6000000;
// console.log(population < finlandiaPopulation);
// console.log(population > 330000000);


// // Strings and Template Literals
// let description = `${country} is in ${continent}, and it's ${population} people speak ${language}.`
// console.log(description);

// // Taking Decisions: if / else Statement
// if (population > 33000000) {
//         console.log ("Brazil's population is above average.")
//     } else {
//         console.log ("Brasil's population is below average.")
//     }


// // Coding  Challenge #1

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95; 

// const imcMark = massMark/ heightMark ** 2
// console.log(imcMark);

// const imcJohn = massJohn/ heightJohn ** 2;
// console.log(imcJohn);

// const markHigherIMC = imcMark > imcJohn;
// console.log(markHigherIMC);

// // Coding Challenge #2

// let compareIMC;
// if (imcJohn > imcMark) {
//     compareIMC = `Jonh's IMC (${imcJohn}) is greater than Mark's IMC (${imcMark}).`; 
// } else {
//     compareIMC = `Mark's IMC (${imcMark}) is greater than Jonh's IMC (${imcJohn}).`;
// }
// console.log(compareIMC);

// // Coding Challenge #3
// const scoreDolphins = ((96 + 108 + 89) / 3)
// const scoreKoalas = ((88 + 91 + 110) / 3)
// console.log (scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log ("Dolphins win the trophy! 🏆")
// } else if ( scoreKoalas > scoreDolphins) { 
//     console.log ("Koalas win the trophy! 🏆")
// } else if (scoreDolphins === scoreKoalas) {
//     console.log ("It's a draw")
// }

// // Strings and Template Literals
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1990;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// // Type Conversion and Coercion
// console.log ('9'- '5');
// console.log ('19' - '13' + '17');
// console.log ('19' - '13'+ 17);
// console.log ('123'< 57);
// console.log (5 + 6 + '4'+ 9 - 4 - 2);

// // Equality Operators: == vs. ===
// // const numNeighbours = Number (prompt ('How many neighbour countries does your conuntry have?'),
// // );

// if (numNeighbours === 1) {
//     console.log ('Only 1 border.');
// } else if (numNeighbours > 1) {
//     console.log ('More than 1 border.')
// } else {
//     console.log ('No borders.')
// };

// // These lines are commented just to prompt don't get in the way of studies.

// // Logical Operators

// if (language === 'english' && population < 50000000 && !isIsland) {
//     console.log ('Come to Brazil! =)');
// } else {
//     console.log ('Brazil does not meet your criteria =(')
// }

// // The Switch Statement
// const day = 'friday';

// switch (day) {
//     case 'monday':
//         console.log ('Play soccer');
//         break;
//     case 'tuesday':
//         console.log ('Write code examples');
//         break;
//     case 'wednesday':
//         console.log ('Record videos');
//         break;
//     case 'thursday':
//         console.log ('Go to coding meetup');
//         break;
//     case 'friday': 
//         console.log ('Plan next week');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log ('Not a valid day');
// }

// // The Conditional (Ternary) Operator
// const sizePopulation = 
// population > 33000000 ? "Brazil's population is above average" : "Brazil's population is above average";

// console.log (sizePopulation);

// // Coding Challenge #4
// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

// console.log (`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`)


// // ______________________________________________________________
// // JAVASCRIPT FUNDAMENTALS - Part 2

// let hasDriversLicense = true;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log ('I can drive :D');

// // Functions 
// // Calling / Running / Invoking Function

// function describeCountry (country, population, capitalCity) {
//     return `${country} has ${population} milions people 
//     and it's capital city is ${capitalCity}.`;
//  }

//  const descPortugal = describeCountry ('Portugal', 10, 'Lisbon');
//  const descGermany = describeCountry ('Germany', 83, 'Berlin');
//  const descFinland = describeCountry ('Finland', 6, 'Helsinki');

//  console.log (descPortugal, descGermany, descFinland);

//  // Functions Declaration vs. Expressions

//     // Function Declaration
 function percentageOfWorld1 (population1) {
     return ((population1 / 7800) * 100)
 }
//  console.log (percentageOfWorld1 (1439)); // China;
//  console.log (percentageOfWorld1 (1380)); // Índia;
//  console.log (percentageOfWorld1 (331)); // Estados Unidos;
//  console.log (percentageOfWorld1 (212)); // Brasil;

//     // Function Expression

// const percentageOfWorld2 = function (population2) {
//     return ((population2 / 7800) * 100)
//  }

//  console.log (percentageOfWorld2 (1439)); // China;
//  console.log (percentageOfWorld2 (1380)); // Índia;
//  console.log (percentageOfWorld2 (331)); // Estados Unidos;
//  console.log (percentageOfWorld2 (212)); // Brasil;


//  // Arrow Functions

//  const percentageOfWorld3 = population3 => (population3 / 7800) * 100;
//  const percChina = percentageOfWorld3 (1439);
//  const percIndia = percentageOfWorld3 (1380);
//  const percEstadosUnidos = percentageOfWorld3 (331);
//  const percBrasil = percentageOfWorld3 (212);

//  console.log(percChina, percIndia, percEstadosUnidos, percBrasil);

//  // Functions Calling Others Functions

// const describePopulation = function (country4, population4) {
//     const percentage = percentageOfWorld1 (population4);
//     const description = `${country4} has ${population4} million people, wich is about ${percentage}% of the world.`;
//     console.log(description);
// };

// describePopulation ('Portugal', 10);
// describePopulation ('China', 1441);
// describePopulation ('USA', 332);

// // Challenge #5

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//     const scoreDolphins = calcAverage (44, 23, 71);
//     const scoreKoalas = calcAverage (85, 54, 41);

//     const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log (`Dolphins wins ${avgDolphins} vs. ${avgKoalas}.`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log (`Koalas wins ${avgKoalas} vs. ${avgDolphins}.`);
//     } else {
//         console.log (`No team wins.`);
//     }
// };

// checkWinner (scoreDolphins, scoreKoalas);

// // Introduction to Arrays

// const populationChina = 1439;
// const populationIndia = 1380; 
// const populationEUA = 331;
// const populationBrasil = 212;

// const populations = [populationChina, populationIndia, populationEUA, populationBrasil];
// console.log (populations);

// const percentages = [percChina, percIndia, percEstadosUnidos, percBrasil];
// console.log (percentages);

// // indexOf - search the index of an element on array.
// const pos = percentages.indexOf(percChina);
// console.log(pos);

// //  
// percentages.splice(pos,1);
// console.log (percentages);

// // Basic Array Operations

// const neighbours = ['Argentina', 'Bolívia', 'Colômbia', 'Guiana', 'Guiana Francesa', 'Paraguai', 'Peru', 'Suriname', 'Uruguai', 'Venezuela']; // Create array
// console.log(neighbours);

// neighbours.push('Utopia'); // Add the fictitious new country in the array
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')){
//     console.log('Probably not a central European country.')
// } else {
//     console.log('Probably is a central European country.')
// }

// neighbours[neighbours.indexOf('Colômbia')] = 'Republic of Colombia';
// console.log(neighbours);

// // Introducing to Objects

// const myCountry = {
//     country: 'Israel',
//     capital: 'Telaviv',
//     language:'Hebraico',
//     population: 8655535,
//     neighborhood: ['Líbano', 'Síria', 'Jordânia', 'Cisjordânia', 'Egito'],
//     describe: function () {
//         console.log (
//             `${this.country} has ${this.population} hebraic-speaking people, ${this.neighborhood.length} 
//             neighbouring countries and a capital called ${this.capital}.`
//         )
//     }
// };

// console.log (myCountry);

// // // Dot vs. Bracket Notation
// console.log(`${myCountry.country} has ${myCountry.population} hebraic-speaking people, ${myCountry.neighborhood.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.population += 2000000;
// console.log(myCountry.population);

// myCountry['population'] -= 2000000;
// console.log(myCountry.population);

// Object Methods

// const myCountry2 = {
//     country: 'Israel',
//     capital: 'Telaviv',
//     language:'Hebraico',
//     population: 8655535,
//     neighborhood: ['Líbano', 'Síria', 'Jordânia', 'Cisjordânia', 'Egito'],
//     describe: function () {
//         console.log (
//             `${this.country} has ${this.population} hebraic-speaking people, ${this.neighborhood.length} 
//             neighbouring countries and a capital called ${this.capital}.`
//         );
//     },
//     checkIsland: function () {
//         this.isIsland = this.neighborhood.length === 0 ? true : false;
//     }
// };

// myCountry2.describe();
// myCountry2.checkIsland();
// console.log(myCountry2);

// // Iteration: The For Loop

// for (let voter = 1; voter <= 50; voter++) {
//     console.log (`Voter number ${voter} is currently voting`)
// };

// // Looping Arrays, Breaking and Continuing

// const populations2 = [1439, 1340, 331, 212]; 
// const percentages2 = [];

// // for (let i = 0; i < populations2.length; i++) {
// // const perc = percentageOfWorld1(populations2[i]);
// //   percentages2.push(perc);
// // }
// // console.log(percentages2);

// // Looping Backwards and Loops in Loops

// var listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) 
//  for (let y = 0; y < listOfNeighbours[i].length; y++)
// console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// // The While Loop

// const percentages3 = [];
// let i = 0;

// while (i < populations2.length) {
// const perc = percentageOfWorld1(populations2[i]);
//   percentages3.push(perc)
// };
// console.log(percentages3);

// Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100,86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20};

for (let i = 0; i < bills.length; i++) {const tipResult = calcTip(bills[i])
tips.push(tipResult);
totals.push(tipResult + bills[i]);
};

console.log(bills, tips, totals);

const caclAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(caclAverage(totals));

/*Coding Challenge #5
Given an array of forecasted maximum temperatures, the thermometer dsplays a string with these temperatures.
Create a function 'printForecast'wich takes in an array 'arr'and logs a string like the above to the console.
Use the problem-solving framework: undestand the problem and break it up into sub-problems.
*/
const data1 = [ 17, 21, 23];

function printForecast (arr) {
let str = '';
for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} in ${i + 1} days...`;
    }
console.log('...'+ str);
};

printForecast(data1);



/* Javascript Banana Joke

Let's understand why this code prints the word 'banana', without the alert having any letter n.

It turns out that 'a' becomes NaN (Not A Number) because it forces a string into a number, 
while the character a can't be analyzed as a number.

Adding NaN to "ba" turns NaN into the string "NaN" due to the type conversion, so we have baNaN. 
As we have a letter a then it turns into baNaNa.

The space between + + serves to make the first string concatenation and the second an addition operator (that is, positive).

Mystery Unraveled! It is worth remembering that this puzzle can only be done in Javascript.
*/

//alert(('b' + 'a' + + 'a' + 'a').toLowerCase());


/* Converting an Object in an Array
We have at least three ways to extract an object to an array, depending on the needs of the project:

⚡1. Object.keys ()
⚡2. Object.values ()
⚡3. Object.entries ()
*/

// At first, let's create an object
let user = {
    name: 'Vector',
    type: 'Robot',
    age: '6 months'
}

// 1. The method Object.keys() convert the property's keys of the user objecr to an array.
let keys = Object.keys(user)
console.log(keys)

// 2. The method Object.values() convert property's values of the user to an array.
let values = Object.values(user)
console.log(values)

// 3. The method Object.entries() convert the enomerable string-keyed properties of an object to an array.
let entries = Object.entries(user)
console.log(entries)

/* Converting an Array in an Object
At first, let's create an array:
*/

const arr = ['Vector', 'Robot', '6 months']

/* The method Object.assign() copy the values of all enumerable own properties from one 
or more source objects to a target object.
*/

const obj1 = Object.assign({}, arr);
console.log(obj1);

/*
    {0: "Vector", 1: "Robot", 2: "6 months"}
    0: "Vector"
    1: "Robot"
    2: "6 months"
    __proto__: Object 
*/

/* The Spread Operator is useful and quick syntax for adding items to array, combining array or objects.
*/

const obj2 = { ...arr }
console.log(obj2);

/*
    {0: "Vector", 1: "Robot", 2: "6 months"}
    0: "Vector"
    1: "Robot"
    2: "6 months"
    __proto__: Object
*/

/* Removing Item from array
There is 3 methods to remove itens from array: 

.shift Method
.pop Method
.splice Method
*/

// .shift removes the first element from array.
const numbersToShift = [2, 5, 9, 14, 37, 41];
numbersToShift.shift();
console.log(numbersToShift);

// .pop removes the last element from arrya.
const numbersToPop = [2, 5, 9, 14, 37, 41];
numbersToPop.pop();
console.log(numbersToPop);

// .splice Remove one or more elements from the array.
// The first parameter indicates where the removal should start. 
// The second indicates the number of values ​​to be removed.
const numbersToSplice = [2, 5, 9, 14, 37, 41];
numbersToSplice.splice(1,4);
console.log(numbersToSplice);


/* 8 Useful Javascript String Methodes
*/

// 1. INDEXOF
// The indexOf() Method returns the index of (the position of) the first ocurrence of a specified text in a string

const str = 'I use CSS everyday.'
str.indexOf('CSS');
//6

console.log(str.indexOf('CSS'));

// 2. LENGTH
// The length property returns the length of a string.

str.length;
// 19

console.log(str.length);

// 3. SLICE
// slice() extracts a part of a string and returns the extracted part in a new string.

str.slice(2, 5);
// use

console.log(str.slice(2, 5))

// 4. REPLACE 
// The replace() method replace a specific value with another value in a string

str.replace('use', 'learn');
// I learn CSS everyday.

console.log(str.replace('use', 'learn'));

// 5. UPPERCASE AND LOWERCASE
// this method converts a string to uppercase or lowercase

str.toUpperCase();
// I USE CSS EVERYDAY.

console.log(str.toUpperCase());

str.toLowerCase();
// i use css everyday.

console.log(str.toLowerCase());

// 6. TRIM  
// The trim() method removes whitespace from both sides os a string.

// const str = '       I use CSS everyday.    '
str.trim();
console.log(str.trim());

// 7. CONCAT
// concat() joins two or more strings. The concat() method can be used instead of the plus operator.

const stri = 'I learned CSS everyday';
stri.concat(' this year.'); // Add a white space in the begin of phrase.
// I learned CSS everyday this year.

console.log(stri.concat(' this year.'));

// 8. SPLIT
// A string can be converted on an array with the split() method.

stri.split('');
// ["I", "learned", "CSS", "everyday"]

console.log(stri.split(' ')); // Add aa white space to split each word.


/*___________________________________________________________________
Javascript Ternary Operator

The conditional (ternary) operator is the only Javascript operator that takes operands.

1. A condition followed by a question mark (?)

2. Then an expression to execute if the condition is truthy followed by a colon (:)

3. And finally the expression to execute if the condition is false
*/

//condição ? true : false

/* 
Note: Don't use this if you have nested if-else as this will make your code hard to read.

This operator is frequently used as a shortcut for the if statement
*/

const num = 10
const  divisible = (num % 2) === 0 ? 'Par': 'Ímpar'
console.log(divisible);
// Par

// (num % 2) === 0 is a statment
// if statement is true return 'even''
// else return 'odd'


/*Operador Javascript Ternário

O operador condicional (ternário) é o único operador Javascript que aceita operandos.

1. Uma condição seguida por um ponto de interrogação (?)

2. Em seguida, uma expressão a ser executada se a condição for verdadeira seguida por dois pontos (:)

3. E finalmente a expressão a ser executada se a condição for falsa

Nota: Não use isso se você tiver aninhado if-else, pois isso tornará seu código difícil de ler.

Este operador é freqüentemente usado como um atalho para a instrução if
*/

/* 

3 WAYS TO EMPTY AN ARRAY

.LENGTH
We can set the length of the Javascript arrays to 0, and this will empty our array.
This is a common way to empty arrays, but it is not the fastest.
*/

var frutasEx1 = ['Maçã','Banana', 'Melancia', 'Uva']
frutasEx1.length = 0

console.log(frutasEx1); // Expected result: []
console.log(frutasEx1.length); // Expected result: 0

/* NEW EMPTY ARRAY

This is the fastest way to empty the array.
This is perfect if you have no reference elsewhere to the original array.
If you do, these references will not be updated and those locations will continue to use the old array.
*/

var frutasEx2 = ['Maçã','Banana', 'Melancia', 'Uva']
frutasEx2.length = []

console.log(frutasEx2); // Expected result: []
console.log(frutasEx2.length); // Expected result: 0

/*  ARRAY SPLICE METHOD

This can be done using the .splice () method from the list of Javascript array methods. The .splice () method takes the index (from which the splice should start) and the number of items to be removed as parameters and joins the elements together.
Almost as fast as assigning it to a new matrix.
*/

var frutasEx3 = ['Maçã','Banana', 'Melancia', 'Uva']
frutasEx3.splice(0, frutasEx3.length)

console.log(frutasEx3); // Expected result: [] pes
console.log(frutasEx3.length); // Expected result: 0


