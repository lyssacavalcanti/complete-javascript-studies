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