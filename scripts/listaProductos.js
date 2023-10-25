import { inventario } from "./inventario.js";
import{ agregarItem } from "./agregarProducto.js"
export const listaProductos = () => {
  const actualizar = document.getElementById("actualizar");
  const buscar = document.getElementById("buscar");
  const eliminar = document.getElementById("eliminar");
  
  
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
      if (confirm(`¿Estás seguro que desea borrar el producto ${item.nombre}?`)) {
        //Recibe el producto a borrar
        //Encuentra el índice del producto a eliminar: deltro del forEach, comparamos el product con el item correspondiente de inventory
        const index = inventario.findIndex(product => product.id === item.id)
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
  cell6.colSpan=3;
  cell6.innerHTML = `TOTAL PRODUCTOS ${cantidadTotal()}`;
  cell7.innerHTML = `PRECIO TOTAL ${precioTotal().toFixed(2)}€`;
  
 /*En el pie meto los productos totales y el precio total de todos los productos disponibles.*/

  /*inventario.forEach((producto) => {
    console.log("ID: " + producto.id);
    console.log("Nombre: " + producto.nombre);
    console.log("Cantidad: " + producto.cantidad);
    console.log("Precio: " + producto.precio);
    console.log(`Cantidad Total: ${cantidadTotal()}`);
    console.log(`Precio Total: ${precioTotal().toFixed(2)}`);
    console.log("-------------");
  }); esto era para debuggear lo dejo comentado y lo borrare*/

  /*const eliminarItem = () => {
    const nombreProducto = document
      .getElementById("input")
      .value.trim()
      .toLowerCase();
    for (let i = 0; i < inventario.length; i++) {
      const element = inventario[i];
      if (inventario[i].nombre === nombreProducto) {
        inventario.splice(i, 1);
      }
    } este era mi antiguo metodo para eliminar lo comento y lo eliminare*/
    //el problema por lo que veo es que cuando borro el objeto con id inferior al maximo
    //cuando creo otro se iguala al ultimo mas alto. no entiendo quiero arreglarlo pero
    //me esta volviendo loco.
  };

  eliminar.addEventListener("click", () => {
    eliminarItem();
    inventario.forEach((producto) => {
      console.log("ID: " + producto.id);
    });
  });
  

  function actualizacionBody() {
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
        eliminarItem();
        inventario.forEach((producto) => {
          console.log("ID: " + producto.id);
        });
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
    cell6.colSpan=3;
    cell6.innerHTML = `TOTAL PRODUCTOS ${cantidadTotal()}`;
    cell7.innerHTML = `PRECIO TOTAL ${precioTotal().toFixed(2)}€`;
    /*
        inventory.forEach(item => {

        const row = table.insertRow()

        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        const cell4 = row.insertCell(3)

        cell1.innerHTML = item.nombre
        cell2.innerHTML = item.cantidad
        cell3.innerHTML = item.precio

        const deleteButton = document.createElement("button")
        deleteButton.innerText = "Borrar"
        deleteButton.addEventListener("click", () => {
            //Se añadira funcionalidad proximamente
        })

        const updateButton = document.createElement("button")
        updateButton.innerText = "Actualizar"
        updateButton.addEventListener("click", () => {
            //Se añadira funcionalidad proximamente
        })

        cell4.appendChild(deleteButton)
        cell4.appendChild(updateButton)


    })
        */
    /* aqui con while... function actualizacionBody() {
          const tablaContainer = document.getElementById("body");
          tablaContainer.innerHTML = "";
        
          let i = 0;
          while (i < inventario.length) {
            const producto = inventario[i];
            const fila = document.createElement("tr");
            fila.innerHTML = `<td>${producto.id}</td><td>${producto.nombre}</td><td>${producto.cantidad}</td><td>${producto.precio}</td>`;
            tablaContainer.appendChild(fila);
            i++;
          }
        }*/
  }
  /* function actualizacionPie() {
    const tablaContainer = document.getElementById("pie");
    const pie = document.getElementById("totalProducto");
    const pie2 = document.getElementById("totalPrecio");
    const fila = document.createElement("tr");
    pie.innerHTML = `TOTAL PRODUCTOS ${cantidadTotal()}`;
    pie2.innerHTML = `PRECIO TOTAL ${precioTotal().toFixed(2)}€`;
  }*/
 function actualizacionPie(){

 }
  actualizar.addEventListener("click", () => {
    actualizacionBody();
    actualizacionPie();
  });

  function buscarProductoEnTabla(nombre) {
    const tablaContainer = document.getElementById("body");
    const tablaContainer2 = document.getElementById("pie");
    // const tablaContainer2 = document.getElementById("pie");
    const pie = document.getElementById("totalProducto");
    const pie2 = document.getElementById("totalPrecio");
    tablaContainer.innerHTML = "";
    tablaContainer2.innerHTML = "";
    pie.innerHTML = "";
    pie2.innerHTML = "";

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

  // Llamar a la función con el nombre del producto que deseas buscar y mostrar en la tabla
  buscar.addEventListener("click", () => {
    const inputValue = input.value.toLowerCase();
    buscarProductoEnTabla(inputValue);
  });
  input.addEventListener("keydown", () => {
    const inputValue = input.value.toLowerCase();
    buscarProductoEnTabla(inputValue);
  });
;