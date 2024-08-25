 // const { formSubmission, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

const launchForm = document.querySelector("form");
const list = document.getElementById("faultyItems");
list.style.visibility = "hidden";


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(listedPlanets);
        
        addDestinationInfo(document, 
            chosenPlanet.name,
            chosenPlanet.diameter,
            chosenPlanet.star,
            chosenPlanet.distance,
            chosenPlanet.moons,
            chosenPlanet.image,
            );
    });

    launchForm.addEventListener("submit", function (event){ 
        event.preventDefault();

        const pilotName = document.querySelector("input[name=pilotName]").value;
        const copilotName = document.querySelector("input[name=copilotName]").value;  
        const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        const cargoMass = document.querySelector("input[name=cargoMass]").value;
        
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
    });
    


 });