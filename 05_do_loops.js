// The do... loop is similar to the while... loop
// But it makes sure it is executed at least once

do {
    var second = new Date().getSeconds();
    if (second != oldSecond)
        console.log(second);

    var oldSecond = second;

} while (second < 59)


process.exit(0);