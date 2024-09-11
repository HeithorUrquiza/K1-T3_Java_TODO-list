function pageRender(task) {
    return `
    <div class="text">
      Atualizar tarefa <br> ${task.name}
    </div>
    <form id="update-form">
      <div class="form-row">
        <div class="input-data">
          <input type="text" required id="name" value='${task.name}'>
          <div class="underline"></div>
          <label for="name">Título</label>
        </div>
        <div class="input-data">
          <input type="text" required id="category" value='${task.category}'>
          <div class="underline"></div>
          <label for="category">Categoria</label>
        </div>
      </div>
      <div class="form-row">
        <div class="input-data">
          <input type="date" id="date" required value='${task.date}'>
          <div class="underline"></div>
          <label for="date" class="date-label">Data de expiração</label>
        </div>
        <div class="input-data">
          <input type="text" id="priority" required placeholder="1-5" value='${task.priority}'>
          <div class="underline"></div>
          <label for="priority">Prioridade</label>
        </div>
      </div>
      <div class="form-row">
        <div class="input-data textarea">
          <textarea rows="8" cols="80" required id="description">${task.description.trim()}</textarea>
          <div class="underline"></div>
          <label for="description">Descrição</label>
        </div>
      </div>
      <div class="form-row submit-btn">
        <div class="input-data">
          <div class="inner"></div>
          <input type="submit" value="Atualizar">
        </div>
        <div class="input-data">
          <div class="inner"></div>
          <input type="button" value="voltar">
        </div>
      </div>
    </form>
  `;
}

const params = new URLSearchParams(window.location.search)
const task = JSON.parse(localStorage.getItem(params.get("task-name")))
document.querySelector('.container').innerHTML = pageRender(task)

const updateForm = document.getElementById('update-form');
updateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const category = document.getElementById('category').value.trim();
    const date = document.getElementById('date').value.trim();
    const priority = document.getElementById('priority').value.trim();
    const description = document.getElementById('description').value.trim();

    const newTask = {
        name,
        category,
        date,
        priority,
        description
    }

    const taskSaved = JSON.parse(localStorage.getItem(task.name))
    const taskUpdated = { ...taskSaved, ...newTask }

    localStorage.setItem(taskUpdated.name, JSON.stringify(taskUpdated));
    localStorage.removeItem(taskSaved.name)
    window.location.replace('../home/home.html');
});

// Get the button element
const backButton = document.querySelector('.input-data input[type="button"]');
// Add an event listener to the button's click event
backButton.addEventListener('click', () => {
    // Redirect to a new page
    window.location.replace('../home/home.html');
});
