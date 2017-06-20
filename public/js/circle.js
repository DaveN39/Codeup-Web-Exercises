(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
    // var c = document.getElementById("myCanvas");
    // var ctx = c.getContext("2d");
    // ctx.beginPath();
    // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    // ctx.stroke();
        
        getArea: function () {
            var area = Math.PI * Math.pow(this.radius, 2);   
            // TODO: complete this method
            // hint: area = pi * radius^2
            return area; 
            // TODO: return the proper value

        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            var result;
            if (doRounding) {
                result = Math.round(this.getArea());
            } else {
                result = this.getArea();
            }


            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + result);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();