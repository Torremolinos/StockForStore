/**
 * @Autor: Adrian Iglesias Riño. (Student)
 * @Github: https://github.com/Torremolinos/StockForStore
 */
import { listaProductos } from "./listaProductos.js";
import { agregarItem } from "./agregarProducto.js";

document.addEventListener("DOMContentLoaded", listaProductos);
document.addEventListener("DOMContentLoaded", () => {
  const botonAgregar = document.getElementById("formulario");  
  botonAgregar.addEventListener("click", () => {
    agregarItem();
  });
});
