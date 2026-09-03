let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let taskList = document.getElementById('taskList');

let tasks = [];

let taskIdCounter = 1;

function render(){
    taskList.innerHTML= '';  // old item deletion

    tasks.forEach((task) =>{
        let li = document.createElement('li');
        li.classList.add('task-item');

        let span = document.createElement('span');

        span.classList.add('task-text');
        span.textContent = task.text;

        let btnWrapper = document.createElement('div');
        btnWrapper.classList.add('task-button');

        let completeBtn = document.createElement('button');

        completeBtn.textContent = '✅'

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';

        btnWrapper.appendChild(completeBtn);
        btnWrapper.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(btnWrapper);

        taskList.appendChild(li);

    })
}

function addTask(){
    let taskText = taskInput.value.trim();

    if(taskText == ''){
        return;
    }

    let newTask = {
        id: taskIdCounter++,
        text: taskText,
        completed: false,
    };

    task.push(newTask);
    taskInput.value = '';
    render()

}

addBtn.addEventListener('click', addTask);