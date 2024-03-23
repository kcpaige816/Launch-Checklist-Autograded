
window.addEventListener("load", function() {

    let listedPlanets;

    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {

        listedPlanets = result;
;
    }).then(function () {
      
       const randomPlanet = pickPlanet(listedPlanets);

       addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, 
        randomPlanet.moons, randomPlanet.image);
    }) 

    let form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        let pilot = document.querySelector('input[name="pilotName"]').value
        let copilot = document.querySelector('input[name="copilotName"]').value
        let list = document.querySelector("#faultyItems");
        let fuelLevel = document.querySelector('input[name="fuelLevel"]').value
        let cargoMass = document.querySelector('input[name="cargoMass"]').value
       
       formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
       event.preventDefault();
 
 })

});