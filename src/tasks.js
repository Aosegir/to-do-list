/*
    This js page will handle all code related to the creation and management of Tasks.
*/

const Tasks = [];
import { taskLoader } from './index.js';

function loadTaskMaker() {
    let taskForm = document.createElement('form');
    taskForm.classList.add('flex', 'column', 'absolute', 'center-content', 'border');
    taskForm.id = 'task-form';

    taskForm.appendChild(formItemMaker('title', 'text'));
    taskForm.appendChild(formItemMaker('description', 'input'));
    taskForm.appendChild(formItemMaker('time', 'date'));
    taskForm.appendChild(formItemMaker('priority', 'text'));
    taskForm.appendChild(formItemMaker('project', 'text'));

    let submitButton = document.createElement('button');
    submitButton.innerText = "Submit";
    taskForm.appendChild(submitButton);
    submitButton.addEventListener('click', () => {
        event.preventDefault();
        let task = transformTaskData(Array.from(taskForm));
        addTaskToArray(task);
        createTask(task);
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

function createTask(taskObj) {
    let newTask = document.createElement('div');
    for(const [key, value] of Object.entries(taskObj)) {
        let item = document.createElement('p');
        item.innerText = `${key}: ${value}`;
        newTask.appendChild(item);
    };
    taskLoader(newTask);
};

function removeTaskForm() {
    main.removeChild(main.lastChild);
};

function transformTaskData(array) {
    let task = {};
    array.forEach((input) => {
        if(input.value) {
            let item = input.id;
            task[item] = input.value;
        };
    });
    return task;
};

function addTaskToArray(taskObj) {
    Tasks.push(taskObj);
}

export { createTask, loadTaskMaker, Tasks };