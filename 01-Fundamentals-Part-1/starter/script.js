/*let js = "amazing";
console.log(40 + 80 + 23 - 10);

console.log("Evan");
console.log(23);

let firstName = "Evan";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let evan_tideswell = "ET";
let $function = 27;

let people = "evan";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Engineer";

let job1 = "programmer";
let job2 = "engineer";

console.log(myFirstJob);

true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Evan");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1988;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1998;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "engineer";

lastName = "Tideswell";
console.log(lastName);
*/

// const now = 2037;
// const ageEvan = now - 1988;
// const ageAlicia = now - 1991;
// console.log(ageEvan, ageAlicia);

// console.log(ageEvan * 2, ageEvan / 10, 2 ** 3);
// // 2 ** 3 mean 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Evan";
// const lastName = "Tideswell";
// console.log(firstName + " " + lastName);

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// console.log(x);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const MarkHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, MarkHigherBMI);

// const firstName = "Evan";
// const job = "IT Engineer";
// const birthYear = 1988;
// const year = 2024;

// const evan =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(evan);

// const evanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(evanNew);

// console.log(`Just a regular string...`);

// console.log(`String
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // const massMark = 95;
// // const heightMark = 1.88;
// // const massJohn = 85;
// // const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// Type Conversion and Coercion

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Evan"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// type coercion

// console.log("I am " + 36 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1; // '11'
// n = n - 1; // converts to number
// console.log(n);

//Truthy and False Values
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Evan"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

//Equality Operators: ==vs. ===
