// Write your helper functions here!

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
 
 function validateInput(input) {
    const numInput = Number(input);
    
    if (!input) {
        return "Empty";
    } else if (!isNaN(numInput)) {
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

    if (validateInput(pilot) === "Empty" || 
    validateInput(copilot) === "Empty" || 
    validateInput(fuelLevel) === "Empty" || 
    validateInput(cargoLevel) === "Empty") 
    {
        alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number")  {
        alert("That pilot isn't a number!");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
        alert("Fuel Level and Cargo Mass must be a Number!")
    } else {
        list.style.visibility = "visible";
        pilot.innerHTML = `Pilot ${pilot} is ready for Launch!`;
        copilot.innerHTML = `Copilot ${copilot} is ready for Launch!`;

        //if was here
    }
    }

    //fuelLevelStatus.innerHTML = value
    //Call function, take statuses and change the HTML on the page (probably using .innerHTML) depending on what fuelLevelStatus and cargoLevelStatus is.
 
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