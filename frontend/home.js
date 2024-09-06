const listItems = [
    "Cozinhar",
    "Ir na feira",
    // "Estudar",
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

const item = (task) => {
    return `
            <li>
              <div class="item-content">
                <span class="item-text">${task}</span>
                <div class="item-buttons">
                  <button class="item-button">
                    <i class="fa-solid fa-file-lines"></i>
                  </button>
                  <button class="item-button">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="item-button">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </li>
          `;
};

listItems.forEach(i => document.getElementById("list-items").innerHTML += item(i));