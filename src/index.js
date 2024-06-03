/*
    This index.js page focuses on loading the information to be displayed to the user.
*/

import './style.css';
import { addNavGroup } from './nav.js';
import { loadTaskMaker } from './tasks.js';

const main = document.getElementById('main');
homePageLoader();

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
    'single', 'height', 'width', 'border');

    let home = document.createElement('div');
    home.classList.add('flex', 'column', 'center-content',
    'single', 'height', 'width', 'border');
    addNavGroup('Home', home);

    let time = document.createElement('div');
    time.classList.add('flex', 'column', 'center-content',
    'double', 'height', 'width', 'border');
    addNavGroup('Today', time);
    addNavGroup('Week', time);

    let priority = document.createElement('div');
    priority.classList.add('flex', 'column', 'center-content',
    'double', 'height', 'width', 'border');
    addNavGroup('Low', priority);
    addNavGroup('Urgent', priority);

    navDiv.appendChild(home);
    navDiv.appendChild(time);
    navDiv.appendChild(priority);
    return navDiv;
}

/*
    Content Loader
*/
function contentLoader() {
    let wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('flex', 'column', 'double', 'border');

    let contentDiv = document.createElement('div');
    contentDiv.classList.add('flex', 'column', 'height', 'border');
    contentDiv.id = "task-content";
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

/*
    Task Loader
*/
function taskLoader(newTask) {
    let taskContent = document.getElementById('task-content');
    console.log(taskContent);
    taskContent.appendChild(newTask);
};

export { taskLoader };