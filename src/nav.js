/*
    This js page will handle all code related to the navbar and
    how it relates to the content displayed on the right
*/

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

export { addNavGroup };