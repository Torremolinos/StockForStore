import { inventario } from "./inventario.js";
import { listaProductos } from "./listaProductos.js";

export const buscarProducto = (event) => {
  const tablaContainer = document.getElementById("tablaBuscador");
  const tablaContainer2 = document.getElementById("body");
  const tablaContainer3 = document.getElementById("pie");
  const input = document.getElementById("buscar").value.toLowerCase(); // Obtener el valor del campo de búsqueda
  let productoEncontrado = null;
  event.preventDefault();
  tablaContainer.innerHTML = "";

  for (const producto of inventario) {
    if (producto.nombre.toLowerCase() === input) {
      productoEncontrado = producto;
      break; // Detener la búsqueda una vez que encuentres el producto
    }
  }
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
      if (
        confirm(
          `¿Estás seguro que deseas borrar el producto ${productoEncontrado.nombre}?`
        )
      ) {
        const index = inventario.findIndex(
          (product) => product.id === productoEncontrado.id
        );
        if (index !== -1) {
          inventario.splice(index, 1);
        }
        tablaContainer.innerHTML = ""; // Esto eliminará todo el contenido de la tabla, pero es posible que desees una forma más eficiente de actualizarla
        tablaContainer2.innerHTML = ""; // Llama a la función que muestra la lista de productos nuevamente
        tablaContainer3.innerHTML = ""; // y por último borro el pie donde estan los precios y la cantidad de productos totales.
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
};

const btnBuscar = document.getElementById("btnBuscar");
const cambio = () => {
  const cambioClase = document.getElementById("tablaBusca");
  cambioClase.classList.replace("hidden", "showed");
};
const imputBusqueda = () => {
  const campoDeBusqueda = document.getElementById("buscar");
  campoDeBusqueda.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Evitar el comportamiento predeterminado de la tecla "Enter"
      buscarProducto(event);
      cambio(); // Llamar a la función de búsqueda cuando se presiona "Enter"
    }
  });
};
imputBusqueda();
btnBuscar.addEventListener("click", cambio);
btnBuscar.addEventListener("click", buscarProducto);
