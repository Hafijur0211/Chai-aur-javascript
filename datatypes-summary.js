// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 10.2;

const isLoggedIn = false;
const outsideTemp = null;
let useEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

// const bigNumber = 98778778786565n;

// Reference (Non-primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hafijur",
  age: 23,
};

const myFunction = function () {
  console.log("Hello World!");
};

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof myFunction)
console.log(typeof heros)
console.log(typeof anotherId)