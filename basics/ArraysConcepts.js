// and array is a data structure that can hold multiple values at once. It is a collection of elements, each identified by an index or key. In JavaScript, arrays are used to store lists of items, and they can hold values of different data types, including numbers, strings, objects, and even other arrays.

//direct declaratin of an array
let a=[]; //empty array
console.log(a.length); 

let arr =[3,5,5,7,9];
console.log(arr.length); //5 highest index = length - 1 = 4
console.log(arr[0]); //3
console.log(arr.length - 1); //4
console.log(arr[arr.length - 1]); //9
// we. do not have object in javascript but we can use array as an object. we can add properties to an array just like we do with objects. but it is not recommended to use array as an object because it can lead to unexpected behavior.
// I can store different data typesin an array
let mixedArray = [1, "hello", true, { name: "John" }, [5, 10]];

//2- using Array constructor
let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2.length);
console.log(arr2);

//3- using Array.of() method
let arr3 = Array.of(1, 2, 3, 4, 5);
console.log(arr3.length);
console.log(arr3);
// Why Javescript are dynamic in nature
let arr4 = [1, 2, 3, 4, 5];
console.log(arr4.length);
arr4.push(6);    // add an element to the end of the array
console.log(arr4.length); // 6
console.log(arr4); // [1, 2, 3, 4, 5, 6]

// add the beginning of the array
arr4.unshift(0); // add an element to the beginning of the array
console.log(arr4.length); // 7
console.log(arr4); // [0, 1, 2, 3, 4, 5, 6]

// remove the last element of the array
arr4.pop(); // remove the last element of the array
console.log(arr4.length); // 6
console.log(arr4); // [0, 1, 2, 3, 4, 5]
let removedElement = arr4.pop(); // remove the last element of the array and store it in a variable
console.log(removedElement); // 5
console.log(arr4.length); // 5
console.log(arr4); // [0, 1, 2, 3, 4]

// remove the first element of the array
arr4.shift(); // remove the first element of the array
console.log(arr4.length); // 4
console.log(arr4); // [1, 2, 3, 4]      
removedFirstElement = arr4.shift(); // remove the first element of the array and store it in a variable
console.log(removedFirstElement); // 1
console.log(arr4.length); // 3
console.log(arr4); // [2, 3, 4] 

for(let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]); // 2, 3, 4
}   

// for .. of loop
for( let user of arr4) {
    console.log('user :   ' +user);// 2, 3, 4
}

// reversed method
let arr5 = ['Ali','Veli','Can', 4, 5];
console.log(arr5.reverse());

// [5, 4, 3, 2, 1] 
//using spread operator
let arr6 = [1, 2, 3, 4, 5];
let arr7 = ["apple", "banana", "orange"];
let arr8 = [...arr6, ...arr7];
console.log(arr8); // [1, 2, 3, 4, 5, 'apple', 'banana', 'orange']

console.log(arr6.concat(arr7)); // [1, 2, 3, 4, 5, 'apple', 'banana', 'orange']

//indexOf() method
let arr9 = [1, 2, 3, 4, 5];
console.log(arr9.indexOf(3));
console.log(arr9.includes(3)); // true
console.log(arr9.includes(6)); // false

//split method
let str = "Hello_World_Hello";
console.log(str.split("_"));
let longStr = str.split("_");
console.log(longStr);
console.log(typeof longStr);

//slice method
let arr10 = [1, 2, 3, 4, 5];
// mines meaning from the end of the array
console.log(arr10.slice(1, 4)); // [2, 3, 4]
console.log(arr10.slice(2)); // [3, 4, 5]
console.log(arr10.slice(-2)); // [4, 5]
console.log(arr10.slice(-3, -1)); // [3, 4]
// question 
// let message = ["hie", "this", "javascript"]
//["ih",siht,"tpircsavaj"]
//Solution
let message1 = ["ih","siht","tpircsavaj"];
let reversedMessage = message1.map(word => word.split("").reverse().join(""));
console.log("reversed " +reversedMessage);
 // ["eih", "siht", "tpircsavaj"]
let messageArrayWords = message1.map(word => word.split(""));
console.log(" bak " +messageArrayWords); 
messageArrayWords.reverse();
console.log("reversed array hoo " +messageArrayWords); 
let reversedMessage2 = messageArrayWords.map(word => word.reverse().join(""));
console.log("reversed 2 " +reversedMessage2); // ["tpircsavaj", "siht", "eih"]

//let reversedMessage2 = message.split("").reverse().join("");
//console.log(reversedMessage2); // "tpircsavaj siht eih"