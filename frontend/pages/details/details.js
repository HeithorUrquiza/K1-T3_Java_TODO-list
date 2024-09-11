function pageRender(task) {
    return `
      <div class="text">
        ${task.name}
      </div>
      <section class="grid-container">
        <div class="item category">
          <span class="field">Categoria</span>
          <p class="info">${task.category}</p>
        </div>
        <div class="item status">
          <span class="field">Status</span>
          <p class="info">${task.status}</p>
        </div>
        <div class="item priority">
          <span class="field">Prioridade</span>
          <p class="info">${task.priority}</p>
        </div>
        <div class="item date">
          <span class="field">Data de Expiração</span>
          <p class="info">${task.date.split('-').reverse().join('/')}</p>
        </div>
        <div class="item description">
          <span class="field">Descrição</span>
          <p class="info info-description">${task.description}</p>
        </div>
      </section>
      <div class="separete">
        <div class="bar"></div>
      </div>
      <div class="back-btn-container">
        <button class="back-button">Voltar</button>
      </div>
  `;
}

const params = new URLSearchParams(window.location.search)
const task = JSON.parse(localStorage.getItem(params.get("task-name")))
document.querySelector('.container').innerHTML = pageRender(task)

const backButton = document.querySelector('.back-button')
backButton.addEventListener('click', () => {
    window.location.replace('../home/home.html')
})