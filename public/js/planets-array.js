(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    // Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune
    var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    // function for logging the planets array
    function logPlanets() {
        console.log("Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.unshift("Sun");
    logPlanets();

    console.log('Adding "Pluto" to the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.push("Pluto");

    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.shift("Sun");

    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.pop("Pluto");

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log("Earth is at the index of " + planets.indexOf("Earth"));
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    console.log('Using splice to remove the planet after "Earth".');
    var indexOfEarth = planets.indexOf("Earth");
    planets.splice(indexOfEarth + 1, 1);
    logPlanets();
    
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    console.log('Using splice to add back the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.splice(planets.indexOf("Earth") + 1, 0, "Mars");
    logPlanets();

    console.log("Reversing the order of the planets array.");
    planets.reverse()
    logPlanets();
    
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    console.log("Sorting the planets array.");
    planets.sort();
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

})();