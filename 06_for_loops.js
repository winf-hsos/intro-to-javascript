// For loops are great for counting
for (var number = 0; number <= 12; number = number + 2)
    console.log(number);

// For loops are often used to iterate over collections of data
var arrayVar = [1, 5, 3, 10, "test", 12, "test", -2, 21];
for (var i = 0; i < arrayVar.length; i++) {
    console.log(arrayVar[i]);
}


// Leaving a loop early (this works for any loop)
for (var i = 0; i < 10000000; i++) {
    console.log(i);
    if (i > 20)
        break;
}


// Manually continuing a loop
for (var i = 0; i < arrayVar.length; i++) {

    // Skip the rest if the content is not a string
    if (typeof(arrayVar[i]) != "string")
        continue;

    console.log(arrayVar[i]);

}

process.exit(0);