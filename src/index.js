import './style.css';

const main = document.getElementById('main');


/*
    Create nav content function
*/
function addNavGroup(name, nav) {
    let group = document.createElement('h4');
    group.classList.add('nav-content');
    group.innerText = name;

    group.addEventListener('click', () => {
        // This event listener will filter the tasks by their appropriate grouping
        console.log(`The name of this group is ${name}`);
    });

    nav.appendChild(group);
}

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
    addNavGroup('Tomorrow', navDiv);
    addNavGroup('This Week', navDiv);
    addNavGroup('This Month', navDiv);

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
        //This event listener will be used to add tasks
        console.log("The add task button works!");
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