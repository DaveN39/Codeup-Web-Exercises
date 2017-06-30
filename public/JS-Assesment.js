// (function(){
    "use strict";



// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
 function isNegative(number) {
 	if (number < 0) {
 		return true;
 	} else {
 		return false;
 	}
 
}

console.log(isNegative(-6));
console.log(isNegative(30));


// Write a function named average that accepts an array of numbers and returns the average of those numbers
function average(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		total = total+array[i];	
	}
	// var average = total / arrayNumber.length;
	return total/array.length;
}

console.log(average([1, 2, 3])); // 2
console.log(average([4, 6, 8, 10, 12])); // 8
console.log(average([90, 95, 85, 65, 100, 60, 95]));


//  average([1, 2, 3]) // 2
//  average([4, 6, 8, 10, 12]) // 8



// Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
function countOdds(arrayNumber) {
	var total = 0
	for (var i = 0; i < arrayNumber.length; i++) {
		if (arrayNumber[i] % 2 != 0) {
			total++;
		}
	}
	return total;
}

 console.log(countOdds([1, 2, 3])); // 2
 console.log(countOdds([4, 6, 8, 10])); // 0
 console.log(countOdds([1, 2, 1, 1])); // 3



// Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space, and returns an object with properties firstName and lastName.

function convertNameToObject(string) {
	var nameArray = string.split(" ");
	var nameObject = {
		firstName: nameArray[0],
		lastName: nameArray[1]
	}
	return nameObject;
}

console.log(convertNameToObject('Harry Potter')); // {firstName: 'Harry', lastName: 'Potter'}
console.log(convertNameToObject('Ron Weasley')); // {firstName: 'Ron', lastName: 'Weasley'}

// Write a function named fiveTo that accepts a number and returns an array of the integers from 5 up to (but not including) the passed number.

 // fiveTo(10) // [5, 6, 7, 8, 9]
 // fiveTo(6) // [5]



// Write a function named upperCaseLastNames that accepts an array of objects where each object has properties firstName and lastName and returns the same array of objects with each last name capitalized

 // var names = [
 //     {firstName: 'Harry', lastName: 'Potter'},
 //     {firstName: 'Ron', lastName: 'weasley'},
 //     {firstName: 'Hermione', lastName: 'granger'}
 // ];
 // upperCaseLastNames(names);
 /*
 [
    {firstName: 'Harry', lastName: 'Potter'},
    {firstName: 'Ron', lastName: 'Weasley'},
    {firstName: 'Hermione', lastName: 'Granger'}
 ]
  */