import { taskList } from "../../storage.js";
import { addTask, getTask, deleteTask, updateTask } from "../../storage-service.js";

const item = (task, idx) => {
    const borderBottomStyle = idx === taskList.length - 1 ? 'solid 1px #16423C' : 'none';
    return `
    <li id="${idx}" style="border-top: solid 1px #16423C; border-bottom: ${borderBottomStyle}">
      <div class="item-content">
        <span class="item-status">Doing</span>
        <span class="item-text">${task.name}</span>
        <div class="priority">
          <span class="priority-text">Pri.</span>
          <span class="priority-value">3</span>
        </div>
        <div class="item-buttons">
          <button class="item-button">
            <i class="fa-solid fa-file-lines icon"></i>
          </button>
          <button class="item-button">
            <i class="fa-solid fa-pen-to-square icon"></i>
          </button>
          <button class="item-button">
            <i class="fa-solid fa-trash icon"></i>
          </button>
        </div>
      </div>
    </li>
  `;
}

taskList.forEach(i => document.getElementById("list-items").innerHTML += item(i, taskList.indexOf(i)));