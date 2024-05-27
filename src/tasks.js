/*
    This js page will handle all code related to the creation and management of tasks.
*/

const tasks = [];

function loadTaskMaker() {
    let taskForm = document.createElement('div');
    taskForm.classList.add('flex', 'column', 'absolute', 'center-content', 'border');
    taskForm.id = 'task-form';

    taskForm.appendChild(formItemMaker('title', 'text'));
    taskForm.appendChild(formItemMaker('description', 'text'));
    taskForm.appendChild(formItemMaker('due', 'date'));
    taskForm.appendChild(formItemMaker('priority', 'text'));

    return taskForm;
};

function formItemMaker(property, type) {
    let contentDiv = document.createElement('div');
    let formLabel = document.createElement('label');
    formLabel.innerText = property;
    formLabel.for = property;

    let formInput = document.createElement('input');
    formInput.type = type;
    formInput.id = property;
    formInput.name = property;

    contentDiv.appendChild(formLabel);
    contentDiv.appendChild(formInput);

    return contentDiv;
}

/*
    Task Factory Function
*/
function createTask(title, description, dueDate, priority) {
    console.log("Hey! this is the 'createTask' function!");
};

export { loadTaskMaker, createTask };