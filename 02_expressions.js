// Expressions are literals and operators to produce a value
var expr1 = 1 ;
var expr2 = 1 + 2;
var expr3 = "expression";

var expr4 = "This " + "is" + " also an " + expr3;
console.log(expr4);

// Boolean expressions can be true or false
var check1 = (1 == 0);
var check2 = 2 > (1 + 1);
console.log(check1);
console.log(check2);

// Boolean expressions can be combined with AND / OR etc.
var booleExpr1 = check1 || check2; 
console.log(booleExpr1);

var booleExpr2 = check1 && check2; 
console.log(booleExpr2);

// Expressions can involve functions
var stringExpr = expr3.charAt(0);
console.log(stringExpr);

var stringExpr2 = expr4.indexOf(expr3);
console.log(stringExpr2);


// You can do math with JavaScript
var maxVal = Math.max(10, 20, 42, 40);
console.log(maxVal);

var sqrtVal = Math.sqrt(256);
console.log(sqrtVal);


process.exit(0);