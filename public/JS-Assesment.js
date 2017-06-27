(function(){
    "use strict";



// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
 function isNegative() {
for (var i = -1; i <= 6; i++){
	console.log("true");
} 
if {
	console.log("false");
}
 isNegative(-1) // true
 isNegative(6) // false
};


// Write a function named average that accepts an array of numbers and returns the average of those numbers
var average = [1, 2, 3]
average([1, 2, 3]) // 2
 average([4, 6, 8, 10, 12]) // 8
var sum = [1, 2, 3].reduce((a, b) => a + b, 0);
console.log(sum); // 6


 average([1, 2, 3]) // 2
 average([4, 6, 8, 10, 12]) // 8



// Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.

 countOdds([1, 2, 3]) // 2
 countOdds([4, 6, 8, 10]) // 0
 countOdds([1, 2, 1, 1]) // 3



// Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space, and returns an object with properties firstName and lastName.

 convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
 convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}



// Write a function named fiveTo that accepts a number and returns an array of the integers from 5 up to (but not including) the passed number.

 fiveTo(10) // [5, 6, 7, 8, 9]
 fiveTo(6) // [5]



// Write a function named upperCaseLastNames that accepts an array of objects where each object has properties firstName and lastName and returns the same array of objects with each last name capitalized

 var names = [
     {firstName: 'Harry', lastName: 'Potter'},
     {firstName: 'Ron', lastName: 'weasley'},
     {firstName: 'Hermione', lastName: 'granger'}
 ];
 upperCaseLastNames(names);
 /*
 [
    {firstName: 'Harry', lastName: 'Potter'},
    {firstName: 'Ron', lastName: 'Weasley'},
    {firstName: 'Hermione', lastName: 'Granger'}
 ]
  */