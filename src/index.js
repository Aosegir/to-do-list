import './style.css';

const main = document.getElementById('main');


/*
    Single Responsibility - instead of loading the entire page, load the nav independent
    to the content on the right side.
*/
function navLoader() {
    let navDiv = document.createElement('div');
    navDiv.classList.add('flex', 'single', 'border', 'height', 'width');

    return navDiv;
}

function contentLoader() {
    let contentDiv = document.createElement('div');
    contentDiv.classList.add('flex', 'double', 'border', 'height', 'width');

    return contentDiv;
}

function homePageLoader() {
    let contentDiv = document.createElement('div');
    contentDiv.classList.add('flex');
    let nav = navLoader();
    let content = contentLoader();

    contentDiv.appendChild(nav);
    contentDiv.appendChild(content);
    main.appendChild(contentDiv);
};

homePageLoader();