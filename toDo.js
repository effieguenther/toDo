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


    completeButton.addEventListener('click', () => {
        console.log('complete task');
        completedTask = newLi.cloneNode(true);
        const completedList = document.querySelector('#completedTasks');
        completedList.appendChild(completedTask);
        completedTask.querySelector('button').remove();
        newLi.remove();
    });
    
}

function createButton() {
    button = document.createElement('button');
    button.innerText = 'complete';
    //button.classList.add('complete-btn');
    return button;
}