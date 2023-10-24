import { inventario } from "./inventario.js";

const agregar = document.getElementById("agregar");
export const agregarItem = () => {
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