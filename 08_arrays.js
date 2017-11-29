/* Besides the primitve types number, string, boolean etc.,
 * JavaScript also has complex data structures.
 * The most important one is the array.
 */

var heroesArray = ["Superman", "Spiderman", "Batman", "Daredevil", "Luke Cage"];

// Single items can be referenced by the index, beginning with 0
console.log(heroesArray[0]) // Superman
console.log(heroesArray[1]) // Spiderman
console.log(heroesArray[4]) // Luke Cage

// Arrays can contain any data type, even mixed
var binaryArray = [1, 0, 0, 0, 0, 0, 1, 0]
var mixedArray = [1, "0", "Banana", true, 42];

console.log(mixedArray[2]) // Banana
console.log(mixedArray[3]) // True

/* 
 * Arrays can be iterated over with for-loops
 */
var binaryToDecimal = function(binaryArray) {

    var decimal = 0;
    var power = 0;
    for (var i = binaryArray.length - 1; i >= 0; i--) {
        decimal += binaryArray[i] * Math.pow(2, power++);
    }

    return decimal;
}

console.log(binaryToDecimal(binaryArray));


process.exit(0);
