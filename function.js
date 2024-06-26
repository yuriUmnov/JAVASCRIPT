function createCounter() {
    let counter = 0
    const myFunction = function() {
      counter = counter + 1
      return counter
    }
    return myFunction
  }
  const increment = createCounter()
     const c1 = increment()
     const c2 = increment()
     const c3 = increment()
     console.log('example increment', c1, c2, c3)
 

     
let val = 7
function createAdder() {
  function addNumbers(a, b) {
    let ret = a + b
    return ret
  }
  return addNumbers
}
let adder = createAdder()
let sum = adder(val, 8)
console.log('example of function returning a function: ', sum)

let val1 = 2
 function multiplyThis(n) {
   let ret = n * val1
   return ret
 }
 let multiplied = multiplyThis(6)
 console.log('example of scope:', multiplied)

"use strict";

let num = 20;

function showFirstMessage (text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

// function calc (a, b) {
//     return (a + b); 
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();

// const calc = a => a ;
const calc = (a, b) => {
    console.log('1');
    return a + b;
};




