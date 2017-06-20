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

    function logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    function planets.unshift("Sun");

    console.log('Adding "Pluto" to the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    function planets.push("Pluto");

    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    function planets.shift("Sun");

    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    function planets.pop("Pluto");

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log("Earth is at the index of " + plantets.indexOf("Earth"));
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    console.log('Using splice to remove the planet after "Earth".');
    var indexOfEarth = planets.indexOf("Earth");
    logPlanets(planets.splice(indexOf + 1, 1))
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    function logPlanets();

    console.log('Using splice to add back the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    function logPlanets();

    console.log(".reverse");
    plantes.reverse()
    logPlanets();
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    function logPlanets();

    console.log(".sort");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    function logPlanets();

})();