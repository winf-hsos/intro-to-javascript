// For some control flows, loops are quite handy

// For example, doing something until a certain condition is true
var i = 10;
console.log("Counting backwards..");

while (i >= 0) {
    console.log(i);
    i = i - 1;
}

// Generating random numbers until a condition is met
var number = 0.0;
while (number < 0.8) {
    number = Math.random();
    console.log("The number " + number + " is" + (number < 0.8 ? "" : " not") + " smaller than 0.8.");
}


process.exit(0);