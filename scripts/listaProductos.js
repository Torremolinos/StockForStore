/*Aqui tenemos el metodo Lista de productos con esto mostramos la lista en una tabla.
 importamos el inventario de prodcutos con el import desde el js indicado.
 Luego nosotros exportamos  lista de productos para que pueda ser usado en otro js llamado desde aqui.
 */
import { inventario } from "./inventario.js";
export const listaProductos = () => {
  const cantidadTotal = () => {
    let cantidadTotal = 0;
    inventario.forEach((producto) => {
      cantidadTotal += producto.cantidad;
    });

    return cantidadTotal;
  };

  const precioTotal = () => {
    let precioTotal = 0;
    let precioUnitario = 0;
    inventario.forEach((producto) => {
      precioUnitario += producto.cantidad * producto.precio;
      precioTotal = precioUnitario;
    });

    return precioTotal;
  };
  /*Aqui tengo la tabla esto corresponde a la parte del body y luego tenemos la parte del pie*/
  const tablaContainer = document.getElementById("body");
  const tablaContainer3 = document.getElementById("tablaBuscador");

  inventario.forEach((item) => {
    const row = tablaContainer.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);

    cell1.innerHTML = item.id;
    cell2.innerHTML = item.nombre;
    cell3.innerHTML = item.cantidad;
    cell4.innerHTML = item.precio;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Borrar";
    deleteButton.addEventListener("click", () => {
      if (
        confirm(`¿Estás seguro que desea borrar el producto ${item.nombre}?`)
      ) {
        //Recibe el producto a borrar
        //Encuentra el índice del producto a eliminar: deltro del forEach, comparamos el product con el item correspondiente de inventory
        const index = inventario.findIndex((product) => product.id === item.id);
        //Si el índice resultante no es -1, tenemos coincidencia
        if (index !== -1) {
          //Borramos el producto del array, le indicamos el objeto y cuantos queremos borrar
          inventario.splice(index, 1);
          // Decrementa el id de los productos con un id mayor al del producto borrado
          for (let i = index; i < inventario.length; i++) {
            inventario[i].id -= 1;
          }
        }
      }
      tablaContainer.innerHTML = ""; //limpiamos la tabla entera para luego refrescarla con listaProdcutos() esto genera "un cambio automatico"
      tablaContainer2.innerHTML = ""; //Limpiamos tambien el pie con la cantidad total y el precio total.
      tablaContainer3.innerHTML = ""; //limpiamos la tabla de buscar

      listaProductos();
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
      const id = item.id;
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
  });

  const tablaContainer2 = document.getElementById("pie");
  const row2 = tablaContainer2.insertRow();
  //intentando añadir el boton de subir
  const subir = document.createElement("button");
  subir.innerText = "Subir";
  const cell6 = row2.insertCell(0);
  const cell7 = row2.insertCell(1);
  const cell8 = row2.insertCell(2);
  //si no funciona el botton de subir en la cell7 pon colSpan 2.
  cell6.colSpan = 3;
  cell6.innerHTML = `TOTAL PRODUCTOS ${cantidadTotal()}`;
  cell7.innerHTML = `PRECIO TOTAL ${precioTotal().toFixed(2)}€`;
  cell8.appendChild(subir);
  /*Esta funcion "la saque de chatgpt" sirve para subir arriba del todo.*/
  subir.addEventListener("click", function () {
    document.body.scrollTop = 0; // Para navegadores antiguos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
  });
  const modal = document.querySelector(".modal"); /*Con querySelector seleccionamos modal.*/
  const cancelar = document.getElementById("cancelar");
  const closeModal = document.getElementById("modal_close");
  const idInput = document.getElementById("idModal");
  const nombreInput = document.getElementById("nombreModal");
  const cantidadInput = document.getElementById("cantidadModal");
  const precioInput = document.getElementById("precioModal");

  cancelar.addEventListener("click",() =>{
    modal.classList.remove("modal--show");
  })
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
    tablaContainer.innerHTML = "";
    tablaContainer2.innerHTML = "";
    tablaContainer3.innerHTML = "";
    listaProductos();

    // Cierra la ventana modal
    modal.classList.remove("modal--show");
  });
};
