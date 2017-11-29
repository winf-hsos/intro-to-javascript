// You can define variables with the var keyword
var simple = 1 + 1;
console.log(simple);

// JavaScript infers the datatype from the value you assign
var textVariable = "Hello World";
console.log(typeof(textVariable));

var numberVariable = 3.14;
console.log(typeof(numberVariable));

// It is also flexible
numberVariable = "Threehundred";
console.log(typeof(numberVariable));

// We can calculate with variables
var pi = 3.14159;
var radius = 10.0;
var area = pi * (radius * radius);
var circumference = 2 * pi * radius;

console.log("The area of a circle with radius 10 m is: " + area + " squaremeters");
console.log("The circumference is: " + circumference);

process.exit(0);