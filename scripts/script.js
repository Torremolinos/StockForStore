document.addEventListener("DOMContentLoaded", () => {
  const actualizar = document.getElementById("actualizar");
  const buscar = document.getElementById("buscar");
  const eliminar = document.getElementById("eliminar");
  const agregar = document.getElementById("agregar");

  const inventario = [
    { id: 1, nombre: "Copos de avena", cantidad: 50, precio: 1 },
    { id: 2, nombre: "Solomillos de Salmón", cantidad: 30, precio: 15 },
    { id: 3, nombre: "Nueces", cantidad: 20, precio: 3 },
    { id: 4, nombre: "Foskitos", cantidad: 15, precio: 6 },
  ];
  const cantidadTotal = () => {
    let cantidadTotal = 0; 
    inventario.forEach((producto) => {
      cantidadTotal += producto.cantidad;
    });
  
    return cantidadTotal;
  }
  const precioTotal = () => {
    let precioTotal = 0;
    inventario.forEach((producto) => {
      precioTotal += producto.precio;
    });
  
    return precioTotal;
  }


  inventario.forEach((producto) => {
    console.log("ID: " + producto.id);
    console.log("Nombre: " + producto.nombre);
    console.log("Cantidad: " + producto.cantidad);
    console.log("Precio: " + producto.precio);
    console.log(`Cantidad Total: ${cantidadTotal()}`)
    console.log(`Precio Total: ${precioTotal()}`)
    console.log("-------------");
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
  }
  function actualizacionPie() {
    const pie = document.getElementById("totalProducto");
    const pie2= document.getElementById("totalPrecio");
    pie.innerHTML= `TOTAL PRODUCTOS ${cantidadTotal()}€`;
    pie2.innerHTML= `PRECIO TOTAL ${precioTotal()}€`;
  
}
  actualizar.addEventListener("click", () => {
    actualizacionBody();
    actualizacionPie();
  });


  function buscarProductoEnTabla(nombre) {
    const tablaContainer = document.getElementById("body");
    const tablaContainer2 = document.getElementById("pie");
    const pie = document.getElementById("totalProducto");
    const pie2= document.getElementById("totalPrecio");
    tablaContainer.innerHTML = "";
    pie.innerHTML= "";
    pie2.innerHTML="";


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
