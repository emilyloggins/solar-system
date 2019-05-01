
console.log("hi")

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

const HTMLElement = document.querySelector("#planets");
// console.log(HTMLElement);

const HTMLFactory = function(planet) {
    return `<h2>${planet}</h2>`
};
const displayPlanets = () => {
    planets.forEach(planet => {
    HTMLElement.innerHTML += HTMLFactory(planet);
    })
};

displayPlanets();


// const firstLetter = planets.forEach(planet => {
//     const newPlanetArray = planet.map(planet.charAt(0).toUpperCase() + planet.slice(1))
//     console.log(newPlanetArray)
// });



// const upperCasePlanets = planets.map(planet => {
//     return planet.charAt(0).toUpperCase();
// })

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/