// what are functions in javascript
// functions are blocks of code that can be called multiple times throughout the program
//not in the class 
// non- primitive data type and dont have a fixed memory

//Named fuctions
//!1 simple function : has no input and no return value
function greet() {
    console.log("Hello, welcome to JavaScript!");
}

greet(); // calling the function

//!2 function with parameters : has input but no return value
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript!`);
}
greetUser("John"); // calling the function with an argument

//!3 function with return value : has input and return value
function add(a, b) {
    console.log("addition of two numbers is :");
    let sum = a + b;
    return sum;
}
console.log("Write this " +add(5, 10)); // calling the function with arguments and getting the return value
 let result = add(5, 10); // calling the function with arguments and getting the return value
//example
function substract(result, b) {
    let sub = result - b;
    console.log("subtraction of two numbers is :" + sub);

}

substract(result, 3); // calling the function with arguments and getting the return value

//!4 function with default parameters : has input and return value
function multiply(a, b = 1) {
    return a * b;
}

//!5 function with rest parameters : has input and return value
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
