/*
    This js page will handle all code related to the creation and management of Tasks.
*/

let Tasks = [];
let TaskID = 0;

import { displayTasks, taskLoader } from './index.js';

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
        createTask(task);
        addTaskToArray(task);
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
    let deleteButton = document.createElement('button');
    deleteButton.id = 'delete';
    deleteButton.task_id = TaskID;
    deleteButton.innerText = "Delete Task";
    deleteButton.addEventListener('click', () => {
        console.log(deleteButton.parentElement);
        for(let i = 0; i < Tasks.length; i++) {
            console.log(Tasks[i].task_id);
            console.log(deleteButton.task_id);
            if (Tasks[i].task_id == deleteButton.task_id) {
                Tasks.splice(i, 1);
                displayTasks();
            };
        };
    });
    newTask.appendChild(deleteButton);
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
    taskObj.task_id = TaskID;
    TaskID++;
    Tasks.push(taskObj);
}

export { createTask, loadTaskMaker, Tasks };