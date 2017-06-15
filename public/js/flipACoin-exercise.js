"use strict";

var flipACoin = Math.floor(Math.random() * 2);

console.log(flipACoin);

if (flipACoin === 1) {
	console.log("Buy a house!");
} else {
	console.log("Buy a car!");
}

var outcome = (flipACoin === 1) ? "Buy a house!" : "Buy a car!";

console.log(outcome);
