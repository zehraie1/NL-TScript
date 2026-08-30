// 6concepts of loops
// Basic loops
// 1- While loops
// 2-For loops
// 3- doWhile loops

//Advance loops
//for .. in
//for .. of
class LoopsConcept {
  whileLoop() {
    const numbers = [];
    let number = 1;

    while (number <= 5) {
      numbers.push(number);
      number++;
    }

    return numbers;
  }

  forLoop() {
    const numbers = [];

    for (let number = 1; number <= 5; number++) {
      numbers.push(number);
    }

    return numbers;
  }

  doWhileLoop() {
    const numbers = [];
    let number = 1;

    do {
      numbers.push(number);
      number++;
    } while (number <= 5);

    return numbers;
  }

  forOfLoop(items) {
    const values = [];

    for (const item of items) {
      values.push(item);
    }

    return values;
  }

  forInLoop(person) {
    const properties = [];

    for (const property in person) {
      properties.push(`${property}: ${person[property]}`);
    }

    return properties;
  }
}

const loops = new LoopsConcept();

console.log(loops.whileLoop());
console.log(loops.forLoop());
console.log(loops.doWhileLoop());
console.log(loops.forOfLoop(["JavaScript", "HTML", "CSS"]));
console.log(loops.forInLoop({ name: "Zehra", level: "advanced" }));
//forEach

//1.While LoopsConcept
// WAP to print nubers from 1-10

let i = 1;
while (i <= 10) {
  console.log(i++);
}
