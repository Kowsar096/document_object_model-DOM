// 1. parent node

const mainContainer = document.getElementById('main-container');


// 2. create child

const placesSection = document.createElement('section');

// create h1

const h1 = document.createElement('h1');
h1.innerText = 'Places i want to visit';


// 3. append placeSection

mainContainer.appendChild(placesSection) 