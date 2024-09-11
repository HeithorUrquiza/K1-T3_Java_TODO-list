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

const item = (task, idx) => {
    const borderBottomStyle = idx === taskList.length - 1 ? 'solid 1px #16423C' : 'none';
    return `
    <li id="${idx}" style="border-top: solid 1px #16423C; border-bottom: ${borderBottomStyle}">
      <div class="item-content">
        <span class="item-status">${task.status}</span>
        <span class="item-text">${task.name}</span>
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

taskList.forEach(i => document.getElementById("list-items").innerHTML += item(i, taskList.indexOf(i)));

// Get the button element
const addButton = document.querySelector('.add-btn-container .add-button');
// Add an event listener to the button's click event
addButton.addEventListener('click', () => {
    // Redirect to a new page
    window.location.replace("../register/register.html");
})
