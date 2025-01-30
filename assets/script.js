

const listaDeItems = document.querySelector("#items");
const itemsInput = document.querySelector("#nuevo-item");
const btnAgregarItem = document.querySelector("#agregar-item");

const items = [
  { id: 1, nombre: "Hacer Ejercicio" },
  { id: 2, nombre: "Jugar con mis Perritos" },
  { id: 3, nombre: "Estudiar" },
  { id: 4, nombre: "Compartir con mis Amigos" },
];

function render() {
  let html = "";
  for (const element of items) {
    html += `<li>${element.nombre} <button onclick="borrarItem(${element.id})">X</button> </li>`;
  }
  listaDeItems.innerHTML = html;
}

render();

btnAgregarItem.addEventListener("click", () => {
  const nuevoId = items[items.length - 1].id + 1;
  const nuevoItem = {
    id: nuevoId,
    nombre: itemsInput.value,
  };

  items.push(nuevoItem);
  itemsInput.value = "";

  render();
});

function borrarItem(id) {
  const index = items.findIndex(item => item.id === id);
  if (index > -1) {
    items.splice(index, 1);
  }
  render();
}

function calcularTotalItems() {
  const totalItems = items.length;
  return totalItems;
}

function actualizarConteoItems() {
  const totalItems = calcularTotalItems();
  document.getElementById("totalItems").textContent = totalItems;
}

// Conteo
actualizarConteoItems();

btnAgregarItem.addEventListener("click", () => {


  actualizarConteoItems();
});

function borrarItem(id) {
  const index = items.findIndex(item => item.id === id);
  if (index > -1) {
    items.splice(index, 1);
  }
  render();
  actualizarConteoItems();
}

function render() {
  let html = "";
  for (const element of items) {
    html += `<li>
      <input type="checkbox" id="check-${element.id}" onclick="marcarItem(${element.id})">
      <label for="check-${element.id}">${element.nombre}</label>
      <button onclick="borrarItem(${element.id})">x</button>
    </li>`;
  }
  listaDeItems.innerHTML = html;

  actualizarConteoRealizados();
}



function marcarItem(id) {
  const checkbox = document.getElementById(`check-${id}`);
  const item = items.find(item => item.id === id);
  item.realizado = checkbox.checked;

  actualizarConteoRealizados();
}

function calcularTotalRealizados() {
  const totalRealizados = items.filter(item => item.realizado).length;
  return totalRealizados;
}

function actualizarConteoRealizados() {
  const totalRealizados = calcularTotalRealizados();
  document.getElementById("totalRealizados").textContent = totalRealizados;
}