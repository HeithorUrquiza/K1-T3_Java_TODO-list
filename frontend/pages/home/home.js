const keys = Object.keys(localStorage)
const taskList = [];
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    taskList.push(JSON.parse(localStorage.getItem(key)));
}

window.redirectToDetailsPage = function(taskName) {
    window.location.replace(`../details/details.html?task-name=${taskName}`)
}

window.redirectToUpdatePage = function(taskName) {
    window.location.replace(`../update/update.html?task-name=${taskName}`)
}

window.deleteTask = function(taskName) {
    localStorage.removeItem(taskName)
    alert(`${taskName} excluida da lista`)
    window.location.reload()
}

const item = (task, idx, tasks) => {
    const borderBottomStyle = idx === tasks.length - 1 || (idx === 0 && tasks.length === 1)
        ? 'solid 1px #16423C' : 'none';
    const borderTopStyle = idx === 0 ? 'solid 1px #16423C' : 'none';
    const checked = task.status === 'Done' ? 'checked' : '';
    return `
    <li id="${idx}" style="border-top: ${borderTopStyle}; border-bottom: ${borderBottomStyle}">
      <div class="item-content">
        <span class="item-status" data-task-name="${task.name}">${task.status}</span>
        <span class="item-text ${checked}" data-task-name="${task.name}">${task.name}</span>
        <div class="priority">
          <span class="priority-text">Pri.</span>
          <span class="priority-value">${task.priority}</span>
        </div>
        <div class="item-buttons">
          <button class="item-button" onclick="redirectToDetailsPage('${task.name}')">
            <i class="fa-solid fa-file-lines icon"></i>
          </button>
          <button class="item-button" onclick="redirectToUpdatePage('${task.name}')">
            <i class="fa-solid fa-pen-to-square icon"></i>
          </button>
          <button class="item-button delete-btn" onclick="deleteTask('${task.name}')">
            <i class="fa-solid fa-trash icon"></i>
          </button>
        </div>
      </div>
    </li>
  `;
}

document.getElementById("list-items").innerHTML = taskList.map(
    (task, idx) => item(task, idx, taskList)
).join('');

// Get the button element
const addButton = document.querySelector('.add-btn-container .add-button');
// Add an event listener to the button's click event
addButton.addEventListener('click', () => {
    // Redirect to a new page
    window.location.replace("../register/register.html");
})

// Switch between status
const statusSpans = document.querySelectorAll('.item-status');
statusSpans.forEach(span => {
    span.addEventListener('click', () => {
        const taskName = span.dataset.taskName
        const task = JSON.parse(localStorage.getItem(taskName))
        if (task.status === 'To Do') {
            localStorage.setItem(taskName, JSON.stringify({ ...task, status: 'Doing' }))
        }
        else if (task.status === 'Doing') {
            localStorage.setItem(taskName, JSON.stringify({ ...task, status: 'Done' }))
        }
        else if (task.status === 'Done') {
            localStorage.setItem(taskName, JSON.stringify({ ...task, status: 'To Do' }))
        }
        window.location.reload()
    })
})

// Filter the tasks by status
const allFilter = document.getElementById('all-filter');
const toDoFilter = document.getElementById('todo-filter');
const doingFilter = document.getElementById('doing-filter');
const doneFilter = document.getElementById('done-filter');

function filterByStatus(status) {
    if (status === 'Todos') {
        window.location.reload()
        return;
    }
    const filteredTasks = taskList.filter(task => task.status === status);
    document.getElementById("list-items").innerHTML = filteredTasks.map(
        (task, idx) => item(task, idx, filteredTasks)
    ).join('');
}

allFilter.addEventListener('click', () => filterByStatus('Todos'));
toDoFilter.addEventListener('click', () => filterByStatus('To Do'));
doingFilter.addEventListener('click', () => filterByStatus('Doing'));
doneFilter.addEventListener('click', () => filterByStatus('Done'));

// Filter the tasks by priority
const priAll = document.getElementById('pri-all');
const pri1 = document.getElementById('pri-1');
const pri2 = document.getElementById('pri-2');
const pri3 = document.getElementById('pri-3');
const pri4 = document.getElementById('pri-4');
const pri5 = document.getElementById('pri-5');

function filterByPriority(priority) {
    if (priority === 'Todas') {
        window.location.reload()
        return;
    }
    const filteredTasks = taskList.filter(task => task.priority === priority);
    document.getElementById("list-items").innerHTML = filteredTasks.map(
        (task, idx) => item(task, idx, filteredTasks)
    ).join('');
}

priAll.addEventListener('click', () => filterByPriority('Todas'));
pri1.addEventListener('click', () => filterByPriority('1'));
pri2.addEventListener('click', () => filterByPriority('2'));
pri3.addEventListener('click', () => filterByPriority('3'));
pri4.addEventListener('click', () => filterByPriority('4'));
pri5.addEventListener('click', () => filterByPriority('5'));