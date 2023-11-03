import { inventario } from "./inventario.js";
// Cuando se confirman los cambios, actualiza el producto
export const guardarCambios = (producto) => {
  const ventanaActualizacion = window.open(
    "actualizarProducto.html",
    "Actualización de Producto",
    "width=400,height=300"
  );
  // Comunica los datos del producto a la ventana emergente
  ventanaActualizacion.postMessage(producto, "*");
};
const updateButton = document.createElement("button");
updateButton.innerText = "Actualizar";
updateButton.addEventListener("click", () => {
  abrirFormularioActualizacion(item); // Pasa el objeto del producto a la ventana emergente
});

// window.location.href ='salir.html';
