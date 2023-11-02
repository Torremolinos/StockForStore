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
        }
      }
      tablaContainer.innerHTML = "";
      listaProductos();
    });

    const updateButton = document.createElement("button");
    updateButton.innerText = "Actualizar";
    updateButton.addEventListener("click", () => {});

    cell5.appendChild(deleteButton);
    cell5.appendChild(updateButton);
  });

  const tablacontainer2 = document.getElementById("pie");
  const row2 = tablacontainer2.insertRow();
  const cell6 = row2.insertCell(0);
  const cell7 = row2.insertCell(1);
  cell6.colSpan = 3;
  cell6.innerHTML = `TOTAL PRODUCTOS ${cantidadTotal()}`;
  cell7.innerHTML = `PRECIO TOTAL ${precioTotal().toFixed(2)}€`;
};


