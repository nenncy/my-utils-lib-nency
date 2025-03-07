

const formateString = (str) => str.charAt(0).toUpperCase() + str.slice(1)

// Math Operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Random Number Generator
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Export functions
module.exports = { formateString, add, subtract, randomNumber };