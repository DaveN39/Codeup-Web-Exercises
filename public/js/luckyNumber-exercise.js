"use strict";

var luckyNumber = Math.floor(Math.random() * 6);
var subtotal = 60;
var discount = 0;
var newTotal;

console.log(luckyNumber);

switch(luckyNumber); {
	case 0:
		console.log("No discount");
		discount = 0;
		break;
	case 1:
		console.log("You get a 10 percent discount");
		discount = 0;
		break;
	case 2;
		console.log("You get a 25 percent discount");
		discount = 0;
		break;
	case 4:
		console.log("You get a 50 percent discount");
		discount = 0;
		break;
	case 5:
		console.log("You get a 100 percent discount");
		discount = 0;
		break;
	default:
		console.log("No lucky number discount");
}


newTotal = subtotal - (subtotal * discount;
	console.log("Your final total after discount is " + newTotal);
