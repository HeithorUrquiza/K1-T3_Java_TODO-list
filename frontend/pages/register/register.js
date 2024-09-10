// import { addTask } from "../../storage-service.js";

const form = document.getElementById('register-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;

    const task = {
        name,
        category,
        date,
        priority,
        description
    }

    const taskSaved = localStorage.getItem(task.name)
    if (taskSaved) {
        alert("Já existe uma tarefa com este nome");
    } else {
        // Add the code to save the task here
        localStorage.setItem(task.name, JSON.stringify(task));
        window.location.replace('../home/home.html');
    }
});

// Get the button element
const button = document.querySelector('.input-data input[type="button"]');

// Add an event listener to the button's click event
button.addEventListener('click', () => {
    // Redirect to a new page
    window.location.replace('../home/home.html');
});


