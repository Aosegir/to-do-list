/*
    This index.js page focuses on loading the information to be displayed to the user.
*/

import './style.css';
import { addNavGroup } from './nav.js';
import { createTask, loadTaskMaker, Tasks } from './tasks.js';

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
    time.id = "time";
    addNavGroup('Today', time);
    addNavGroup('Week', time);

    let priority = document.createElement('div');
    priority.classList.add('flex', 'column', 'center-content',
    'double', 'height', 'width', 'border');
    priority.id = "priority";
    addNavGroup('Low', priority);
    addNavGroup('Urgent', priority);

    let project = document.createElement('div');
    project.classList.add('flex', 'column', 'center-content',
    'double', 'height', 'width', 'border');
    project.id = "project";

    navDiv.appendChild(home);
    navDiv.appendChild(time);
    navDiv.appendChild(priority);
    navDiv.appendChild(project);
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
    taskContent.appendChild(newTask);
};

/*
    Task Display
*/
function displayTasks(keyword, filter) {
    let taskContent = document.getElementById('task-content');
    while(taskContent.lastChild) {
        taskContent.removeChild(taskContent.lastChild);
    };

    // edge case: this is for the home button, which has no id on the parent div
    if(!filter) {
        for(let task of Tasks) {
            createTask(task);
        };
        return;
    };

    for(let task of Tasks) {
        if(task[filter].toLowerCase() == keyword.toLowerCase()) {
            createTask(task);
        };
    };
};

export { taskLoader, displayTasks };

/*
    THINGS LEFT
        ADD DELETE BUTTON TO EACH TASK
        ALLOW FOR TASKS TO MAKE PROJECTS TO FILTER BY
        UPDATE CSS?
*/