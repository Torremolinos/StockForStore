import { inventario } from "./inventario.js";
import { listaProductos } from "./listaProductos.js";
export const agregarItem = () => {
  const agregar = document.getElementById("formulario2");
  agregar.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombreProducto = document.getElementById("nombre").value.trim().toLowerCase();
    const cantidadProducto = parseFloat(document.getElementById("cantidad").value);
    const precioProducto = parseFloat(document.getElementById("precio").value);

    if (nombreProducto && !isNaN(cantidadProducto) && !isNaN(precioProducto)) {
      const newItem = {
        id: inventario.length + 1, //esto lo hicimos en clase con diego, en vez de crear yo una variable
        //meto el array le sumo uno. yo lo que hacia era coger el ultimo y sumarle uno.
        nombre: nombreProducto,
        cantidad: cantidadProducto,
        precio: precioProducto,
      }
      inventario.push(newItem);
      console.log(newItem.id);
      //ahora para limpiar la tabla según lo que tenia antes y confirmo David.
      const limpiarTabla = document.getElementById("body");
      limpiarTabla.innerHTML = "";
      agregar.reset(); //esto resetea los campos en vez de tener que poner innerHTML ="";
      listaProductos();
    }
  });
};
