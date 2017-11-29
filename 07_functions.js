// Any variable in JavaScript can store be a function

var funcVar = function() {
    return "I am a function";
};

console.log(funcVar());

// Functions can take arguments / parameters

var square = function(x) {
    return x * x;
}

console.log("Two squared is: " + square(2));

// Function can take more than one parameter

var power = function(baseFunc, exponent) {
    var base = baseFunc;
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
};

console.log("2 to the power of 4 equals: " + power(2, 4));

// Functions can even take functions as arguments
console.log("4 squared to the power of 2 equals: " + power(square(4), 2));

console.log(power(function() { return 2; }, 2));



/* Functions can define local variables
 *
 */
var radius = 2;

var getCircleArea = function() {
    // This variable is local only
    var pi = 3.14159;

    // Variables square and radius are global
    return pi * square(radius);
}

// console.log(pi);
console.log("The area of a circle with radius 2 m is " + getCircleArea() + " square meters.");



process.exit(0);
