// You can control the flow of a program with various commands
// if...then...else provides a control-mechanism based on boolean expressions

if (true) {
    console.log("This is always true");
    sendSMS();
}
else {
    console.log("This can never be reached");
}

// The else part is optional
var now = new Date();
if (now.getDay() == 7) {
    console.log("Hooray! It's sunday!")
}

// You can use ELSE to do something when the expression is false
if (now.getDay() == 6 || now.getDay() == 7) {
    console.log("Hooray! It's weekend!")
}
else {
    console.log("Sorry, gotta work!");
}

// You can also nest control structures as you like
if (now.getDay() == 6 || now.getDay() == 7) {
    console.log("Hooray! It's weekend!")
}
else {
    var hour = now.getUTCHours() + 2;
    console.log(hour);

    if ((hour > 8) && (hour <= 17)) {
        console.log("Sorry, you have to go to work!");
    }
    else {
        console.log("No work at this time of day.");
    }
}

process.exit(0);