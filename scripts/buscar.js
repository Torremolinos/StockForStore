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
    const cell2 = row.insertCell(0);
    const cell3 = row.insertCell(1);
    const cell4 = row.insertCell(2);
    const cell5 = row.insertCell(3);

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
      // Obtenemos los elementos de entrada en la modal
      const modal = document.querySelector(".modal");
      const idInput = document.getElementById("idModal");
      const nombreInput = document.getElementById("nombreModal");
      const cantidadInput = document.getElementById("cantidadModal");
      const precioInput = document.getElementById("precioModal");

      // Obtengo los datos actuales del producto
      const id = productoEncontrado.id;
      const producto = inventario.find((product) => product.id === id);

      // Carga los datos actuales en los campos de entrada
      idInput.value = producto.id;
      nombreInput.value = producto.nombre;
      cantidadInput.value = producto.cantidad;
      precioInput.value = producto.precio;

      // Muestra la modal
      modal.classList.add("modal--show");
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
const modal = document.querySelector(".modal");
const closeModal = document.getElementById("modal_close");
const idInput = document.getElementById("idModal");
const nombreInput = document.getElementById("nombreModal");
const cantidadInput = document.getElementById("cantidadModal");
const precioInput = document.getElementById("precioModal");

/*Aqui cuando apretas el boton actualizar cierras la ventana modal dando 
  marcha al addEventlistener que arranca todo esto.*/
closeModal.addEventListener("click", () => {
  const id = parseInt(
    idInput.value
  ); /*recibo el valor del ID me daba error sin el, porque el id de abajo no recibia parametros*/
  /*Todos los logs de abajo son para comprobar que recibo bien los parametros*/
  console.log(id);
  const nuevoNombre = nombreInput.value;
  console.log(nuevoNombre);
  const nuevaCantidad = parseInt(cantidadInput.value);
  console.log(nuevaCantidad);
  const nuevoPrecio = parseFloat(precioInput.value);
  console.log(nuevoPrecio);

  // Una vez tenemos los parametros asegurados actualizamos el producto en el inventario con los nuevos valores

  const producto = inventario.find((product) => product.id === id);
  console.log(producto);
  if (producto) {
    producto.nombre = nuevoNombre;
    /*Lo mismo cada log esta para comprobar que los datos pasan correctamente.*/
    console.log(nuevoNombre);
    producto.cantidad = nuevaCantidad;
    console.log(nuevaCantidad);
    producto.precio = nuevoPrecio;
    console.log(nuevoPrecio);
  }

  // Limpia y vuelve a mostrar la lista de productos actualizada

  listaProductos();

  // Cierra la ventana modal
  modal.classList.remove("modal--show");
});
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
