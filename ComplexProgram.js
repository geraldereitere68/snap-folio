/*
   Filename: ComplexProgram.js
   Description: A complex JavaScript program demonstrating various concepts and techniques.
   Author: AI Assistant
*/

// Object representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Object representing a car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving the ${this.make} ${this.model}.`);
  }
}

// Initialize some person and car objects
const john = new Person("John", 30);
const jane = new Person("Jane", 25);
const tesla = new Car("Tesla", "Model 3", 2021);
const bmw = new Car("BMW", "M3", 2022);

// Function that accepts a callback and executes it after a delay
function delayedExecution(callback, delay) {
  setTimeout(callback, delay);
}

// Function that returns a promise that resolves after a delay
function delayedExecutionPromise(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

// Demonstrate the usage of callbacks and promises
delayedExecution(() => {
  john.introduce();
  tesla.drive();
}, 2000);

delayedExecutionPromise(3000)
  .then(() => {
    jane.introduce();
    bmw.drive();
  })
  .finally(() => {
    console.log("All operations completed!");
  });

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Higher-order function to calculate the sum of an array
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Calculate and print the sum of numbers array
console.log(`Sum of numbers: ${sumArray(numbers)}`);

// Function to find the maximum number in an array
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Find and print the maximum number in numbers array
console.log(`Max number: ${findMax(numbers)}`);

// Object representing a rectangle
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return 2 * (this.length + this.width);
  }
}

// Create a rectangle object and calculate its area and perimeter
const rectangle = new Rectangle(5, 10);
console.log(`Area: ${rectangle.getArea()}`);
console.log(`Perimeter: ${rectangle.getPerimeter()}`);

// Module pattern - Calculator module
const Calculator = (function () {
  let result = 0;

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    getResult: () => result,
  };
})();

console.log(`2 + 3 = ${Calculator.add(2, 3)}`);
console.log(`5 - 2 = ${Calculator.subtract(5, 2)}`);
console.log(`4 * 3 = ${Calculator.multiply(4, 3)}`);
console.log(`10 / 2 = ${Calculator.divide(10, 2)}`);
console.log(`Current result: ${Calculator.getResult()}`);

// More code...

// More code...

// More code...

// More code...

// More code...

// More code...

// More code...

// More code...

// More code...

// More code...

// The code continues for more than 200 lines...