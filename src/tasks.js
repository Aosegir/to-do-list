/*
    This js page will handle all code related to the creation and management of Tasks.
*/

import { taskLoader } from './index.js';

function createTask(array) {
    let newTask = document.createElement('div');
    array.forEach((input) => {
        if(input.value) {
            let taskItem = document.createElement('p');
            taskItem.innerText = input.value;
            newTask.appendChild(taskItem);
            console.log(input.value);
        };
    });
    taskLoader(newTask);
};

function removeTaskForm() {
    main.removeChild(main.lastChild);
};

function loadTaskMaker() {
    let taskForm = document.createElement('form');
    taskForm.classList.add('flex', 'column', 'absolute', 'center-content', 'border');
    taskForm.id = 'task-form';

    taskForm.appendChild(formItemMaker('title', 'text'));
    taskForm.appendChild(formItemMaker('description', 'input'));
    taskForm.appendChild(formItemMaker('due', 'date'));
    taskForm.appendChild(formItemMaker('priority', 'text'));

    let submitButton = document.createElement('button');
    submitButton.innerText = "Submit";
    taskForm.appendChild(submitButton);
    submitButton.addEventListener('click', () => {
        event.preventDefault();
        createTask(Array.from(taskForm));
        removeTaskForm();
    });

    return taskForm;
};

function formItemMaker(property, type) {
    let contentDiv = document.createElement('div');
    let formLabel = document.createElement('label');
    formLabel.innerText = property;
    formLabel.htmlFor = property;

    let formInput = document.createElement('input');
    formInput.type = type;
    formInput.id = property;
    formInput.name = property;

    contentDiv.appendChild(formLabel);
    contentDiv.appendChild(formInput);

    return contentDiv;
}

export { loadTaskMaker };