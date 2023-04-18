function addTask() {
    const newTask = document.createTextNode(document.querySelector('#task').value);
    const newLi = document.createElement('li');
    const parentList = document.querySelector('#activeTasks');
    newLi.appendChild(newTask);
    parentList.appendChild(newLi);
}