let a=100;

let b=200;

// console.log(a+b);
// console.log(a-b); // -100

// console.log(a*b);
// console.log(a/b);

console.log("***********************");

let x="Hello";

let y="Playwright";

// console.log(x+y); //HelloPlaywright

// console.log(a+b+x+y); // 100+200+Hello+Playwright ==> 300HelloPlaywright

// console.log(x+y+a+b); // Hello+Playwright+100+200 ==> HelloPlaywright100+200 ==> HelloPlaywright100200

// console.log(x+y+(a+b)); // Hello+Playwright+300 ==> HelloPlaywright300

// console.log(x+y+a+b+x+y); // HelloPlaywright100200HelloPlaywright

// console.log(x+y+(a+b)+x+y); //HelloPlaywright300HelloPlaywright

console.log(a+b+x+y+a+b); // 100+200+Hello+Playwright+100+200==> 300HelloPlaywright100200
console.log(a+b+x+y+(a+b)); // 300HelloPlaywright300

console.log("The value of a is :" +a); // The value of a is : 100

console.log("The sum of a and b is :" +a+b); // The sum of a and b is :100200

console.log("The sum of a and b is :" +(a+b)); // The sum of a and b is :300

console.log(true +"Hello" +false) ;// trueHellofalse

console.log(12.33+19.55+x+y+a+b) ; //  31.880000000000003HelloPlaywright100200