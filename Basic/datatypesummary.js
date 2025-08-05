// Primitive data types in JavaScript
// This file summarizes the basic data types in JavaScript.
// It includes examples and explanations of each type
// 7 type of data types in JavaScript


// String
// Number
// Boolean
//null
// undefined
// Symbol
// BigInt

 
// Reference data types ( not primitive types)
// Object
// Array
// Function


const score = 100; // Number
const name = "John Doe"; // String
const isActive = true; // Boolean
const user = null;  // Null
let age;    // Undefined
const uniqueId = Symbol('123'); // Symbol
const id = Symbol('123'); // Symbol
// console.log( uniqueId === id); // false, symbols are unique

// const bigNumber = BigInt(123456789012345678901234567890); // BigInt 

const heros = ["Super  hero ", "Shaktiman", "Batman"]; // Array
const person = { // Object
  name: "John Doe",
  age: 30,
  isActive: true
};
function greet() { // Function
  console.log("Hello, World!");
}   

const myFunction = function() { // Function expression
  console.log("This is a function expression.");
}
console.log(typeof user); // "number"
