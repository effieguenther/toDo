function addTask() {
    const newTask = document.querySelector('#task').value;
    const newDeadline = document.querySelector('#deadline').value;
    const newLi = document.createElement('li');
    const completeButton = document.createElement('button');
    const parentList = document.querySelector('#activeTasks');
    

    if (newDeadline) {
        task = document.createTextNode(newTask + ' - ' + newDeadline);
    } else {
        task = document.createTextNode(newTask);
    }

    newLi.appendChild(task);
    parentList.appendChild(newLi);
    
}

function completeTask() {
    
}