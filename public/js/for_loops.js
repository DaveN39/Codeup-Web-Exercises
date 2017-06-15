"use strict";

var userInput;

do {

	userInput = prompt("Please input a number between 1 and 10.");

} while(isNaN (userInput) || (userInput < 1 || userInput > 10));

for (var i = 1; <= 10; i++) {
	console.log(userInput + "x" + i "=" + (i * userInput))
}

// For Loops

// Create a file named for_loops.js inside the js directory and link it to your loops.html file.

// Write the JS code to prompt the user for a number between 1 and 10, then log to the console the multiplication table for that number. For instance, if the user enters is 7, the console output should look like:

//  7x1=7
//  7x2=14
//  7x3=21
//  7x4=28
//  7x5=35
//  7x6=42
//  7x7=49
//  7x8=56
//  7x9=63
//  7x10=70





// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

var max = 200;
var min = 20;
var randomNumber = Math.floor(Math.random() * (max - min)) + min;

for (var i = 1; i <= 10; i++){
	console.log(randomNumber + " is even.");
} else {
	console.log(randomNumber + " is odd... very odd.");
}
//  123 is odd
//  80 is even
//  24 is even
//  199 is odd
//  ...




var stringNumber;

for(var i = 1; i <= 10; i++) {
	stringNumber = i.toString();

	stringNumber = stringNumber.substr(stringNumber.length -1);

	console.log(stringNumber.repeat(i));
}

// Use inline JavaScript to create a for loop that uses console.log to create the output shown below.

//  1
//  22
//  333
//  4444
//  55555
//  666666
//  7777777
//  88888888
//  999999999
//  0000000000



for(var )
// Create a for loop that uses console.log to create the output shown below.

//  100
//  95
//  90
//  85
//  80
//  75
//  70
//  65
//  60
//  55
//  50
//  45
//  40
//  35
//  30
//  25
//  20
//  15
//  10
//  5