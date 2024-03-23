// require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
    let missionTarget = document.querySelector("#missionTarget");
    missionTarget.innerHTML = 
    `
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
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let h2 = document.querySelector("#launchStatus");
    let pilotStatus = document.querySelector("#pilotStatus");
    let copilotStatus = document.querySelector("#copilotStatus");
    let fuelStatus = document.querySelector("#fuelStatus");
    let cargoStatus = document.querySelector("#cargoStatus");


    if (validateInput(pilot) === "Empty" || 
        validateInput(copilot) === "Empty" || 
        validateInput(fuelLevel) === "Empty"|| 
        validateInput(cargoLevel) === "Empty"
    ){
        alert("Missing Input Fields")
    } else {
        pilotStatus.textContent = `Pilot ${pilot} is ready for launch`
        copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`
        list.style.visibility = "visible"
    }

    if (validateInput(fuelLevel) === 'Is a Number') {
        if (Number(fuelLevel) < 10000) {
          h2.style.color = 'red';
          fuelStatus.innerHTML = "Fuel level too low for launch";
          h2.textContent = "Shuttle Not Ready for Launch";
    } else {
        fuelStatus.textContent = 'Fuel level high enough for launch'; 
    }
    }   

    if (validateInput(cargoLevel) === 'Is a Number') {
        if (Number(cargoLevel) > 10000) {
            h2.style.color = "red";
            cargoStatus.textContent = 'Cargo mass too heavy for launch';
            h2.innerText = 'Shuttle Not Ready for Launch';
        } else {
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
    }
}
    if (Number(fuelLevel) >= 10000 && Number(cargoLevel) <= 10000) {
        list.style.visibility = 'visible'
        h2.style.color = "green";
        h2.innerHTML = `Shuttle is Ready for Launch`; 
    }

 }

 async function myFetch() {
 
    let response = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    let planetsReturned = await response.json()
    
    return planetsReturned
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