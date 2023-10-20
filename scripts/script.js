/**
 * @Autor: Adrian Iglesias Riño.
 * @Github: https://github.com/Torremolinos/StockForStore
 */
document.addEventListener("DOMContentLoaded", () => {
  const actualizar = document.getElementById("actualizar");
  const buscar = document.getElementById("buscar");
  const eliminar = document.getElementById("eliminar");
  const agregar = document.getElementById("agregar");

  const inventario = [
    { id: 1, nombre: "copos de avena", cantidad: 50, precio: 1 },
    { id: 2, nombre: "solomillos de salmon", cantidad: 30, precio: 15 },
    { id: 3, nombre: "nueces", cantidad: 20, precio: 3 },
  ];
  /*const nuevo = {id: 5, nombre: "maiz", cantidad: 60, precio: 40 };
  console.log(typeof(nuevo));
  inventario.push(nuevo); pruebas para saber porque me daba undefined.*/
  const cantidadTotal = () => {
    let cantidadTotal = 0;
    inventario.forEach((producto) => {
      cantidadTotal += producto.cantidad;
    });

    return cantidadTotal;
  };
  const precioTotal = () => {
    let precioTotal = 0;
    inventario.forEach((producto) => {
      precioTotal += producto.precio;
    });

    return precioTotal;
  };

  inventario.forEach((producto) => {
    console.log("ID: " + producto.id);
    console.log("Nombre: " + producto.nombre);
    console.log("Cantidad: " + producto.cantidad);
    console.log("Precio: " + producto.precio);
    console.log(`Cantidad Total: ${cantidadTotal()}`);
    console.log(`Precio Total: ${precioTotal()}`);
    console.log("-------------");
  });

  const eliminarItem = () => {
    const nombreProducto = document
      .getElementById("input")
      .value.trim()
      .toLowerCase();
    for (let i = 0; i < inventario.length; i++) {
      const element = inventario[i];
      if (inventario[i].nombre === nombreProducto) {
        inventario.splice(i, 1);
      }
    }
    //el problema por lo que veo es que cuando borro el objeto con id inferior al maximo
    //cuando creo otro se iguala al ultimo mas alto. no entiendo quiero arreglarlo pero 
    //me esta volviendo loco.
  };

  eliminar.addEventListener("click", () => {
    eliminarItem();
    inventario.forEach((producto) => {
      console.log("ID: " + producto.id)});
  });
  const agregarItem = () => {
    let productoUltimoId = 1;
    const regex = /^[a-zA-Z\s]*[a-zA-Z][a-zA-Z\s]*$/;
    const nombreProducto = document
      .getElementById("nombre")
      .value.trim()
      .toLowerCase();
    const cantidadProducto = parseFloat(
      document.getElementById("cantidad").value
    );
    const precioProducto = parseFloat(document.getElementById("precio").value);
    inventario.forEach((producto) => {
      producto.id;
      productoUltimoId++;
      console.log(`${productoUltimoId}`);
    });
    if (
      nombreProducto == "" ||
      !regex.test(nombreProducto) ||
      nombreProducto == " " ||
      cantidadProducto < 0 ||
      isNaN(cantidadProducto) ||
      precioProducto < 0 ||
      isNaN(precioProducto)
    ) {
      alert(`Inserta correctamente los datos`);
      return;
    }

    const newItem = {
      id: productoUltimoId,
      nombre: nombreProducto,
      cantidad: cantidadProducto,
      precio: precioProducto,
    };
    inventario.push(newItem);
    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
  };

  agregar.addEventListener("click", () => {
    agregarItem();
  });

  function actualizacionBody() {
    //añadir una logica esto debe ser el de crear elemento
    const tablaContainer = document.getElementById("body");
    tablaContainer.innerHTML = "";
    inventario.forEach((producto) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `<td>${producto.id}</td><td>${producto.nombre}</td><td>${producto.cantidad}</td><td>${producto.precio}</td>`;
      tablaContainer.appendChild(fila);
    });
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
  function actualizacionPie() {
    const tablaContainer = document.getElementById("pie");
    const pie = document.getElementById("totalProducto");
    const pie2 = document.getElementById("totalPrecio");
    const fila = document.createElement("tr");
    pie.innerHTML = `TOTAL PRODUCTOS ${cantidadTotal()}`;
    pie2.innerHTML = `PRECIO TOTAL ${precioTotal().toFixed(2)}€`;
  }
  actualizar.addEventListener("click", () => {
    actualizacionBody();
    actualizacionPie();
  });

  function buscarProductoEnTabla(nombre) {
    const tablaContainer = document.getElementById("body");
    // const tablaContainer2 = document.getElementById("pie");
    const pie = document.getElementById("totalProducto");
    const pie2 = document.getElementById("totalPrecio");
    tablaContainer.innerHTML = "";
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
    buscarProductoEnTabla(input.value);
  });
  input.addEventListener("keydown", () => {
    buscarProductoEnTabla(input.value);
  });
});
