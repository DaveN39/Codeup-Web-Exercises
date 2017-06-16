// Write a function called `identity(input)` that takes in an argument called input and returns that input.

function identity(input){
	return input;
}

// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that funciton call.

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
// Write a function called `first(input)` that returns the first character in the provided string. 

function first(input){
    var str = "Hello Codeup";
    var res = str.charAt(0)
}

// Write a fuction called `last(input)` that returns the last character of a string

function last(input){
	var str = "Hello Codeup";
    var res = str.slice(-1);	
}

// Write a function called `rest(input)` that returns everything but the first character of a string.

function rest(input){
	var str = "Hello Codeup!";
	var res = str.slice(1, 5);
}

// Write a function called `reverse(input)` that takes a string and returns it reversed.

function reverse(input){
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}
 
reverse("hello");

// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.

function isNumeric(input){
	return Math.PI
}

// Write a function called `count(input)` that takes in a string and returns the number of characters.

function count(input){
	var txt = "Hello Codeup!"
}

// Write a function called `add(a, b)` that returns the sum of a and b

function add(a, b){
	return a + b;
}

// Write a function called `subtract(a, b)` that return the difference between the two inputs.

function subtract(a, b){
	return difference(a, b);
}

// Write multiply(a, b) that returns the product

function multiply(a, b){
	return a * b;
}

// Write a divide(numerator, denominator) function that returns a divided by b

function divide(numerator, denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];
}

// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`

function remainder(number, divisor){
	var remainder = x % y;
	return (x - remainder) / y;
}

// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.

function square(a){
	var square = function (x) {
  	return x*x;
};
}

// # Super Duper Gold-Star Bonus

// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators



// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
