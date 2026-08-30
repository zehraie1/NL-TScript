// 6concepts of loops
// Basic loops
// 1- While loops
// 2-For loops
// 3- doWhile loops

//Advance loops
//for .. in
//for .. of

// print the numbers from 1 to 10 using different types of loops

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
// write a for loop to print odd number until the given number
let n = 1;
while (n <= 10) {
    n++
let oddNuber = n % 2 !== 0 ? console.log(`Odd number: ${n}`) : console.log(`Even number: ${n}`);
}

while (5){
    console.log("This is an infinite loop");
}