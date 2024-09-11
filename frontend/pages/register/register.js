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
        description,
        status: "To Do"
    }

    // Validate the priority
    if (Number(priority) < 1 || Number(priority) > 5) {
        alert("Prioridade inválida. O valor precisa estar entre 1 e 5");
        return;
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


