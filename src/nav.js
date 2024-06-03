/*
    This js page will handle all code related to the navbar and
    how it relates to the content displayed on the right
*/

/*
    Create nav content function
*/

import { displayTasks } from './index.js';

function addNavGroup(name, nav) {
    let group = document.createElement('h4');
    group.classList.add('nav-content');
    group.innerText = name;

    group.addEventListener('click', () => {
        displayTasks(name, group.parentElement.id);
    });

    nav.appendChild(group);
}

export { addNavGroup };