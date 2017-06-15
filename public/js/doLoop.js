 "use strict";
 // This is how you get a random number between 50 and 100
 var allCones = Math.floor(Math.random() * 50) + 50;
 var min = 50;
 var max = 100;
 var random = Math.floor(Math.random() * (max - min)) + min;
 
 console.log("I have to sell all " + allCones + " of my cones!");

do {
 // This is how you get a random number between 1 and 5
 var conesOrdered = Math.floor(Math.random() * 5) + 1;
	
	if(conesOrdered > allCones) {
		console.log("I cannot sell you any!" + conesOrdered + " cones. I only have " + allCones + ".");
		continue;
	}
// calculate the result of allCones minus conesOrdered
// store that result to the variable allCones to reflect your new inventory.
	allCones = allCones - conesOrdered;
		console.log("Thank you for buying " + conesOrdered + " number of cones.");
		console.log("I have " + allCones + " remaining....");

} while (allCones > 0);

console.log("Great, I sold all of my cones!");

// if (conesOrdred > allCones) {
// 	console.log("I'm sorry. I do not have " + conesOrdred + " cones. I only have " + allCones + " left.");
// } else {


// 	console.log("The customer ordered " + conesOrdred + " number of ice-cream cones.");
// 	allCones = allCones - conesOrdred;
// 	console.log("I now only have " + allCones + " left in my invetory.");
// }


// var x = 10;
// do {
// 	alert("This will run.");
// } while(x !== 10);


// var password = "";
// do {
// 	password = prompt("Pleae enter a password");
// } while(passCheck(password));

// do {
// 	alert("Welcome to our site!");
// 	login = confirm()
// }

// An ice cream seller can't go home until she sells all of her cones. 
// Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. 
// Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. 
// Use a do-while loop to log to the console the amount of cones sold to each person. 
// This is how you get the random numbers

// The output should be similar to the following

//  5 cones sold...  // if there are enough cones
//  Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//  Yay! I sold them all! // If there are no more cones


