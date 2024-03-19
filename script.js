// const { formSubmission } = require("./scriptHelper");

const { pickPlanet } = require("./scriptHelper");

formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass)

pilot = document.querySelector(input[name="pilotName"]);
copilot = document.querySelector(input[name="copilotName"]);
list = document.getElementById("faultyItems");
h2 = document.getElementById("launchStatus");
pilotStatus = document.getElementById("pilotStatus");
copilotStatus = document.getElementById("copilotStatus");
fuelStatus = document.getElementById("fuelStatus");
cargoStatus = document.getElementById("cargoStatus");

window.addEventListener("load", function() {
   
    let listedPlanets = myFetch().value;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
      
        pickPlanet(listedPlanets);
    }) 
    addDestinationInfo(document, planet.name, diameter, star, distance, moons, imageUrl);

    event.preventDefault();
 });