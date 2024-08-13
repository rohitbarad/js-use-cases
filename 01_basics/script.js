'use strict';// for newer version, a stricter use of code unlike older version

console.log("Hello Rohit!");
console.table(["hello!"]);


console.log(typeof NaN); //number
console.log(typeof undefined); //undefined
console.log(typeof null); //object


const name = function (){console.log("Rohit");}
console.log(typeof name); // function, but its a function object


let a = 3;
let b = a++; //post
console.log(`b: ${b} and a: ${a}`);

a = 3;
b = ++a;//pre
console.log(`b: ${b} and a: ${a}`);


// Primitive Values(number, string, boolean, BigInt, Symbol, undefined, null)
// non-primitive or reference values(object, array, function, etc) all are objects