(function){
	"use strict";

// }
// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [todo];
    var books = [
    {
        title: "Title 1",
        author: {
            firstName: "First Name 1",
            lastName: "Last Name 1"
        }
    }
    {
        title: "Title 2",
        author: {
            firstName: "First Name 2",
            lastName: "Last Name 2"
        }
    }
    {
        title: "Title 3",
        author: {
            firstName: "First Name 3",
            lastName: "Last Name 3"
        }
    }
    {
        title: "Title 4",
        author: {
            firstName: "First Name 4",
            lastName: "Last Name 4"
        }
    }

    ]

// log out the books array
console.log("Orsinger's Postulate of Approaching Loops");
console.log("Start by ignoring the loop completely.");
console.log("If you have an array of things named with a plural variable name,");
console.log("Then, make a singular version of that variable name and assign the first element of that array.");
console.log("Console.log that first element of the array.");

// var index = 0;
// var book = books[index];
books.forEach(function(book, index, array) {

// console.log(book);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
// books.forEach(function(book, index, array){
    console.log("Book #" + (index + 1);
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    console.log("---");
});

    console.log("after console.logging a working solution for the first element of the array.");
    console.log("Reassign your singular variable to holg the next element of that array.");

    console.log("=======");
    console.log("Once you have your solution without the loop, write your forEach with the singular variable name as the parameter");
    console.log("Then move your code into the forEach function's body");
// end loop here
