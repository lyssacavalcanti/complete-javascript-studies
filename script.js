// JAVASCRIPT FUNDAMENTALS - Part 1

// // Lecture - Values and Variables

// const country = 'Brazil';
// const continent = 'South America';
// let population = 209500000;

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

// // if (numNeighbours === 1) {
// //     console.log ('Only 1 border.');
// // } else if (numNeighbours > 1) {
// //     console.log ('More than 1 border.')
// // } else {
// //     console.log ('No borders.')
// // };
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

// Coding Challenge #4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

console.log (`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`)

// JAVASCRIPT FUNDAMENTALS - Part 2

