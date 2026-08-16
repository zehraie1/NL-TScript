// Majorly we can use three types of variables to store any data type.
// we can assign var avariable second time but we can  assign let and but not const variable second time.
//! no redeclaration for let.
// ! Important : var is function scoped and let and const are block scoped.
//var is old way of declaring variable and let and const are new way of declaring variable in ES6.
//  var, let and const

var a=10; // global variable

console.log(`The value of a is : ${a}`); // 10

// function test()
// {
//     let a=20;
//     console.log(a); 

//     if(true)
//     {
//         let a=30;
//         console.log(a); 
//     }
// console.log(a); 

// }

// test();

// console.log(a);

// Redeclaration :

// let number=10;

// var number =20; // SyntaxError: Identifier 'number' has already been declared

// console.log(number);

// Reassignment :

// let c=10;
// c=20;

// console.log(c); // 20


// Hoisting : it is allowed in var and not allowed in let.

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a=10;


// let a;

// console.log(a); // undefined

// const t=100;
// t=200; //TypeError: Assignment to constant variable.
// console.log(t);

// const day=7;

// const day=10; // SyntaxError: Identifier 'day' has already been declared
// const day; // SyntaxError: Missing initializer in const declaration
// day=7;

// console.log(day);

// console.log(t); // ReferenceError: Cannot access 't' before initialization
// const t=100;

// var a=10;
// var a=20;