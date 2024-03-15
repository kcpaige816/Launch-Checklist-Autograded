require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
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

    let isShuttleReady = true;
    let pilotInput = document.getElementById("pilotName");
    let copilotInput = document.getElementById("copilotName");
    let pilotName = pilotInput.value;
    let copilotName = copilotInput.value;
    // validateInput(eachParameter);
    
    if (fuelLevel < 10000) {
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        isShuttleReady = false;
    } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName} is ready for launch`; 
    }

    if (cargoMass > 10000) {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        isShuttleReady = false;
    } else {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName} is ready for launch`;
    }

    if (!isShuttleReady) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.querySelector("h2").style.color = "red";
        document.querySelector("h2").innerHTML = "Shuttle Not Ready for Launch";
    }  else {
        document.querySelector("h2").style.color = "green";
        document.querySelector("h2").innerHTML = "Shuttle is Ready for Launch";
    }
        return
 }

 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;