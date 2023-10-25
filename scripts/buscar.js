import { inventario } from "./inventario.js";
export const buscarProductoPorNombre =(nombre)=> {
  return inventario.find((producto) => producto.nombre === nombre);
}
const productoEncontrado = buscarProductoPorNombre(nombre);

if (productoEncontrado) {
  const row = tablaContainer.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);

  cell1.innerHTML = productoEncontrado.id;
  cell2.innerHTML = productoEncontrado.nombre;
  cell3.innerHTML = productoEncontrado.cantidad;
  cell4.innerHTML = productoEncontrado.precio;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Borrar";
  deleteButton.addEventListener("click", () => {
    if (confirm(`¿Estás seguro que deseas borrar el producto ${productoEncontrado.nombre}?`)) {
      const index = inventario.findIndex((product) => product.id === productoEncontrado.id);
      if (index !== -1) {
        inventario.splice(index, 1);
      }
      tablaContainer.innerHTML = "";
      listaProductos();
    }
  });

  const updateButton = document.createElement("button");
  updateButton.innerText = "Actualizar";
  updateButton.addEventListener("click", () => {
    // Agregar lógica para actualizar el producto si es necesario
  });

  cell5.appendChild(deleteButton);
  cell5.appendChild(updateButton);
} else {
  const row = tablaContainer.insertRow();
  const cell1 = row.insertCell(0);
  cell1.colSpan = 5;
  cell1.innerHTML = `Producto no existe o no se encuentra disponible.`;
}