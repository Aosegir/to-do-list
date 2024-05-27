/*
    This index.js page focuses on loading the information to be displayed to the user.
*/

import './style.css';
import { addNavGroup } from './nav.js';
import { loadTaskMaker, createTask } from './tasks.js';

const main = document.getElementById('main');

/*
    Single Responsibility - instead of loading the entire page, load the nav independent
    to the content on the right side.
*/

/*
    Nav Loader
*/
function navLoader() {
    let navDiv = document.createElement('div');
    navDiv.classList.add('flex', 'column', 'center-content',
        'single', 'border');

    addNavGroup('Today', navDiv);
    addNavGroup('Week', navDiv);

    return navDiv;
}

/*
    Content Loader
*/
function contentLoader() {
    let wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('flex', 'column', 'double', 'border');

    let contentDiv = document.createElement('div');
    contentDiv.classList.add('flex', 'height', 'border');
    wrapperDiv.appendChild(contentDiv);

    let footerDiv = document.createElement('div');
    footerDiv.classList.add('flex', 'center-content', 'border');
    footerDiv.id = "task-footer";
    wrapperDiv.appendChild(footerDiv);

    let addTaskButton = document.createElement('button');
    addTaskButton.innerText = "Add Task";
    addTaskButton.addEventListener('click', () => {
        let taskForm = loadTaskMaker();
        main.appendChild(taskForm);
    });
    footerDiv.appendChild(addTaskButton);

    return wrapperDiv;
}

/*
    Home Page Loader
*/
function homePageLoader() {
    let contentDiv = document.createElement('div');
    contentDiv.classList.add('flex', 'height', 'width');
    let nav = navLoader();
    let content = contentLoader();

    contentDiv.appendChild(nav);
    contentDiv.appendChild(content);
    main.appendChild(contentDiv);
};

homePageLoader();