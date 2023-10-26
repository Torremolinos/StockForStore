import { inventario } from "./inventario.js";
// Cuando se confirman los cambios, actualiza el producto
export function guardarCambios() {
    // Lógica para guardar los cambios en el servidor o actualizar los datos en la ventana emergente
    // Luego, notifica a la ventana principal
    window.opener.dispatchEvent(new CustomEvent("productoActualizado", { detail: productoModificado }));
    window.close();
  }
  
// window.location.href ='salir.html';