"use strict";

var proceed = confirm("Would you like to enter in a number?");

if (proceed) {
	var prompt("Please enter a number.");

	if (isNaN(parseFloat(nummber))) {
		console.log("Not a valid number.");
	} else {
		if (number % 2 === 0) {
			alert("Your number is even.");
		} else {
			alert("Your number is odd.")
		}
		
		alert("Your number plus 100 is " + (parseFloat (number) + 100));

		if (number < 0) {
			console.log(number + " is negative")
		}
} else {
	console.log("Another time then...");
}