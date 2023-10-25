import { inventario } from "./inventario.js";

export function buscarProductoEnTabla(nombre) {
  const tablaContainer = document.getElementById("body");
  // const tablaContainer2 = document.getElementById("pie");

  inventario.forEach((producto) => {
    if (producto.nombre === nombre) {
      const fila = document.createElement("tr");
      fila.innerHTML = `<td>${producto.id}</td><td>${producto.nombre}</td><td>${producto.cantidad}</td><td>${producto.precio}</td>`;
      tablaContainer.appendChild(fila);
    }
  });

  if (tablaContainer.children.length === 0) {
    // Si no se encontró el producto, muestra un mensaje en la tabla
    const mensaje = document.createElement("tr");
    mensaje.innerHTML = "<td colspan='4'>Producto no encontrado.</td>";
    tablaContainer.appendChild(mensaje);
  }
}
const input = document.getElementById("buscar");
// Llamar a la función con el nombre del producto que deseas buscar y mostrar en la tabla
buscarProductoEnTabla(nombre).addEventListener("click", () => {
  const inputValue = inputValue.value.toLowerCase();
  buscarProductoEnTabla(inputValue); 
});
input.addEventListener("keydown", () => {
  const inputValue = input.value.toLowerCase();
  buscarProductoEnTabla(inputValue);
});
