const listItems = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    "Ir na feira",
    "Estudar",
    // "Namorar",
    // "Dormir",
    // "Assistir filme",
    // "Ir ao supermercado",
    // "Ler",
    // "Fazer exercícios",
    // "Lavar a louça",
    // "Esticar os músculos",
    // "Fazer compras online",
    // "Falar com a família",
    // "Estudar inglês",
    // "Fazer ginástica",
    // "Ir ao cinema",
    // "Fazer caminhada",
    // "Fazer compras",
    // "Ler um livro"
];

const item = (task, idx) => {
    const borderBottomStyle = idx === listItems.length - 1 ? 'solid 1px #16423C' : 'none';
    return `
    <li id="${idx}" style="border-top: solid 1px #16423C; border-bottom: ${borderBottomStyle}">
      <div class="item-content">
        <span class="item-status">Doing</span>
        <span class="item-text">${task}</span>
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

listItems.forEach(i => document.getElementById("list-items").innerHTML += item(i, listItems.indexOf(i)));