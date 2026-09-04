// document.getElementById('players-container').childNodes[3]

// create element and set innerText or innerHTML

const newChild = document.createElement('li');
newChild.innerText = 'New born footballer';

// find the parent where you will add the child

const playerList = document.getElementById('player-list');

// append the child to the parent

playerList.appendChild(newChild)