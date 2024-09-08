import { taskList } from "./storage.js";

function addTask(task) {
    for (let taskSaved of taskList) {
        if (taskSaved.name === task.name) {
            throw new Error("Já existe uma tarefa com este nome");
        }
    }
    taskList.push(task)
}

function getTask(taskName) {
    for (let task of taskList) {
        if (task.name === taskName) {
            return task
        }
    }
    throw new Error("Tarefa não encontrada")
}

function deleteTask(taskName) {
    let index = taskList.findIndex(task => task.name === taskName)
    if (index === -1) {
        throw new Error("Tarefa não encontrada")
    }
    taskList.splice(index, 1)
}

function updateTask(taskName, newTask) {
    let index = taskList.findIndex(task => task.name === taskName)
    if (index === -1) {
        throw new Error("Tarefa não encontrada")
    }
    taskList[index] = { ...taskList[index], ...newTask }
}

export { addTask, getTask, deleteTask, updateTask }
