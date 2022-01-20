// import functions

import { people } from './data.js';

console.log(people, 'people');

// grab DOM elements
const selectEl = document.querySelector('select');
const nameEl = document.querySelector('.name');
const ageEl = document.querySelector('.age');
const bioEl = document.querySelector('.bio');
const hobbiesEl = document.querySelector('.hobbies');
const container = document.querySelector('.contain');

console.log('Elements', selectEl, nameEl, ageEl, bioEl, hobbiesEl, container);

selectEl.addEventListener('change', (e) => {
    console.log('user click');
});

function renderPerson(index) {
    container.classList.add(`${people[index].name}`);
    nameEl.textContent = 'Name: ' + people[index].name;
    ageEl.textContent = 'Age: ' + people[index].age;
    bioEl.textContent = 'Bio: ' + people[index].bio;

    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);
    }
}

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
