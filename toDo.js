function addTask() {
    const newTask = document.querySelector('#task').value;
    const newDeadline = document.querySelector('#deadline').value;
    const newLi = document.createElement('li');
    const completeButton = createButton()
    const parentList = document.querySelector('#activeTasks');
    

    if (newDeadline) {
        task = document.createTextNode(newTask + ' - ' + newDeadline);
    } else {
        task = document.createTextNode(newTask);
    }

    newLi.appendChild(task);
    newLi.appendChild(completeButton);
    parentList.appendChild(newLi);
    
}

function createButton() {
    button = document.createElement('button');
    button.innerText = 'complete';
    button.addEventListener('click', completeTask());
    return button;
}

function completeTask() {
    console.log('complete task');
    
}