"use strict";

var cameron = 180;
var ryan = 250;
var george = 320;
var discountedAmount;
var finalTotal;

if (cameron > 200) {
	discountedAmount = cameron * .1;
	finalTotal = cameron - discountedAmount;
	console.log("Cameron got discount on " + cameron + " of " + discountedAmount);
} else {
	console.log("Cameron paid " + cameron + " and did not have a discount");
	console.log("Cameron had a final total of " + finalTotal);
	finalTotal = cameron;
}
if (ryan > 200) {
	discountedAmount = ryan * .1;
	finalTotal = ryan - discountedAmount;
	console.log("Ryan got discount on " + ryan + " of " + discountedAmount);
} else {
	console.log("Ryan paid " + ryan + " and did not have a discount");
	
}
if (george > 200) {
	discountedAmount = george * .1;
	finalTotal = george - discountedAmount;
	console.log("George got discount on " + george + " of " + discountedAmount);
} else {
	console.log("George paid " + george + " and did not have a discount");
	
}