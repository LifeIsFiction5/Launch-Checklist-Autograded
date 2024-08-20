// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTargetDiv = document.getElementById("missionTarget");
        missionTargetDiv.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}"/>
    `;
 }
 
 function validateInput(input) {
    const numInput = Number(input);
    
    if (!input) {
        return "Empty";
    } else if (numInput) {
        return "Is a Number";
    } else if (isNaN(numInput)) {
        return "Not a Number";
    }
 }
 
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelLevelStatus = document.getElementById("fuelStatus");
    const cargoLevelStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot) === "Empty" || 
    validateInput(copilot) === "Empty" || 
    validateInput(fuelLevel) === "Empty" || 
    validateInput(cargoLevel) === "Empty")  {

        return "All fields are required!";
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number")  {
        return "Pilot and Co-pilot names should not be numbers!";
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
        return "Fuel Level and Cargo Mass must be Numbers!";
    } else {
        const fuelLevelNum = Number(fuelLevel);
        const cargoLevelNum = Number(cargoLevel);

        if (fuelLevelNum < 10000) {
        list.style.visibility = "visible";
        fuelLevelStatus.innerHTML = "Not enough fuel for the journey!";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else if (cargoLevelNum >= 10000) {
        list.style.visibility = "visible";
        cargoLevelStatus.innerHTML = "Too much mass for the shuttle to take off!";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelLevelStatus.innerHTML = `Fuel level high enough for launch`;
        cargoLevelStatus.innerHTML = `Cargo mass low enough for launch`;
        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
        launchStatus.style.color = "green";
    }
    }
    };

 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length);

    return planets[randomIndex];
 };
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;