console.log('todo start');

let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let taskList = document.getElementById('taskList');

// console.log(taskInput, addBtn, taskList);

// addBtn.addEventListener('click', function(){  // using anonymous function
//     console.log('btn clicked')
// });

addBtn.addEventListener('click', () => {

    let li = document.createElement('li');
    li.textContent = taskInput.value;
    taskList.appendChild(li);

    let span = document.createElement('span');

    span.textContent = taskInput.value;

    let btnWrapper = document.createElement('div');

    let completeBtn = document.createElement('button');
    completeBtn.textContent = '✅';
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';

    btnWrapper.appendChild(completeBtn);
    btnWrapper.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnWrapper);

    taskList.appendChild(li);

    taskInput.value = '';
});

// using enter button

taskInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        let li = document.createElement('li');
       
        taskList.appendChild(li);
        let span = document.createElement('span');

        span.textContent = taskInput.value;

        let btnWrapper = document.createElement('span');

        let completeBtn = document.createElement('button');
        completeBtn.textContent = '✅';
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';

        btnWrapper.appendChild(completeBtn);
        btnWrapper.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(btnWrapper);

        taskList.appendChild(li);

        taskInput.value = ''
    }
});

// create element

// let li = document.createElement('li');
// li.textContent = 'Learn Js';
// console.log(li);

// taskList.appendChild(li);
