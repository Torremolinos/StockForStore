document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("buscar");

  const inventario = [
    { id: 1, nombre: "Copos de avena", cantidad: 50, precio: 1 },
    { id: 2, nombre: "Solomillos de Salmón", cantidad: 30, precio: 15 },
    { id: 3, nombre: "Nueces", cantidad: 20, precio: 3 },
    { id: 4, nombre: "Foskitos", cantidad: 15, precio: 6 },
  ];

  inventario.forEach((producto) => {
    console.log("ID: " + producto.id);
    console.log("Nombre: " + producto.nombre);
    console.log("Cantidad: " + producto.cantidad);
    console.log("Precio: " + producto.precio);
    console.log("-------------");
  });
  
  function crearTabla() {
    //añadir una logica esto debe ser el de crear elemento
    const tablaContainer = document.getElementById("body");
    tablaContainer.innerHTML = "";
    inventario.forEach((producto) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `<td>${producto.id}</td><td>${producto.nombre}</td><td>${producto.cantidad}</td><td>${producto.precio}</td>`;
      tablaContainer.appendChild(fila);
    });
  }
  btn1.addEventListener("click", () => {
    crearTabla();
  });

  function buscarProductoEnTabla(nombre) {
    const tablaContainer = document.getElementById("body");
    tablaContainer.innerHTML = ""; // Limpiar la tabla

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
  btn2.addEventListener("click", () => {
    buscarProductoEnTabla(input.value);
  });
});
