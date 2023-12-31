import { inventario } from "./inventario.js";
import { listaProductos } from "./listaProductos.js";

export const agregarItem = () => {
  const agregar = document.getElementById("formulario2");
  agregar.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombreProducto = document.getElementById("nombre").value.trim().toLowerCase();
    const cantidadProducto = parseInt(document.getElementById("cantidad").value);
    console.log(cantidadProducto)
    const precioProducto = parseFloat(document.getElementById("precio").value);/*aunque es float no me deja meter decimales que raro*/ 
    console.log(precioProducto)

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
      const limpiarTabla2 = document.getElementById("pie");
      limpiarTabla.innerHTML = "";
      limpiarTabla2.innerHTML = "";
      agregar.reset(); //esto resetea los campos en vez de tener que poner innerHTML ="";
      listaProductos();
    }
  });
};
