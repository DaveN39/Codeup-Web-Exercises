"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

if (color === "red") {
    consloe.log("Roses are red");
} else if (color === "orange") {
    console.log("Orange you glad i didnt say banana");
} else if (color === "yellow") {
    console.log("Dont eat yellow snow!");
} else if (color === "green") {
    console.log("Green is the color of grass");
} else if (color === "blue") {
    console.log("The sky is Blue!");
} else {
    console.log("I don't know anything about that color");
}


switch (color) {
	case "red":
        console.log("What a coincidence, that's also one of my color!");
        break;
    case "orange":
        console.log("Just plain orange? Okay...");
        break;
    case "yellow":
        console.log(" Yellow isn't my favorite!");
        break;
    case "green":
    	console.log("Green is not a bad color...");
    	break;
    case "blue":
    	console.log("Blue is the color of the sky.");
    	break;
    default: "indigo";
    	console.log(colors + "I don't know anything by that color.");
    	break;
    
}

    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
