require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = ` 
    
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src='${imageUrl}'> `

 }
 
 function validateInput(testInput) {
    
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || 
    validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert('Missing Input - All Fields Required');
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Invalid Input - Non-Numeric Values Required for Pilot and Co-pilot Fields.")
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert("Invalid Input - Numeric Values Required for Fuel and Cargo Fields.")
    }
    
    let isShuttleReady = true;

    if (fuelLevel < 10000) {
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        isShuttleReady = false;
    } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"; 
    }

    if (cargoMass > 10000) {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        isShuttleReady = false;
    } else {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    }

    if (!isShuttleReady) {
        list.style.visibility = "visible";
        document.querySelector("h2").style.color = "red";
        document.querySelector("h2").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`; 
    }  else {
        document.querySelector("h2").style.color = "green";
        document.querySelector("h2").innerHTML = "Shuttle is Ready for Launch"; 
    }
      
 }


// button.addEventListener("click", function () {
    
//     let myForm = document.getElementById("testForm"); //grab all info from form by id

//     let list = document.getElementById("faultyItems");
//     let pilot = document.getElementById("pilotName");
//     let copilot = document.getElementById("copilotName");
//     let fuelLevel = document.getElementById("fuelLevel");
//     let cargoMass = document.getElementById("cargoMass");

//     formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    
// });

 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         return response.json()
    });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {

    let index =  Math.floor(Math.random() * planets.length);
    return planets[index]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;