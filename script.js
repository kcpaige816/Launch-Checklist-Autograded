const { formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!
formSubmission()

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    }) 
    addDestinationInfo(document, planet.name, diameter, star, distance, moons, imageUrl);
    //you don't want form to submit, so use event.prevent()
    
 });