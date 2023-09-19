var carrito = JSON.parse(localStorage.getItem("carrito"));
var listaResumen = document.getElementById("lista-resumen");
var totalResumen = document.getElementById("total-resumen");
listaResumen.innerHTML = "";
var total = 0;

if (carrito) {
  carrito.forEach(function (plan) {
    var li = document.createElement("li");
    var imagen = document.createElement("img");
    imagen.src = plan.imagen;
    imagen.alt = plan.nombre;
    imagen.classList.add("producto-imagen");
    li.appendChild(imagen);

    var nombreSpan = document.createElement("span");
    nombreSpan.classList.add("producto-nombre");
    nombreSpan.innerText = plan.nombre;
    li.appendChild(nombreSpan);

    var precioSpan = document.createElement("span");
    precioSpan.classList.add("producto-precio");
    precioSpan.innerText = plan.precio;
    li.appendChild(precioSpan);

    var eliminarButton = document.createElement("button");
    eliminarButton.innerHTML = "<i class='bx bx-trash'></i>";
    eliminarButton.classList.add("eliminar-button");
    eliminarButton.addEventListener("click", function () {
      eliminarProducto(carrito.indexOf(plan));
    });
    li.appendChild(eliminarButton);

    listaResumen.appendChild(li);

    var precioNumerico = parseFloat(plan.precio.replace("S/", ""));
    total += precioNumerico;
  });
}

totalResumen.innerText = "Total: S/ " + total.toFixed(2);

function eliminarProducto(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  listaResumen.removeChild(listaResumen.childNodes[index]);

  total = 0;
  carrito.forEach(function (plan) {
    var precioNumerico = parseFloat(plan.precio.replace("S/", ""));
    total += precioNumerico;
  });

  totalResumen.innerText = "Total: S/ " + total.toFixed(2);
}

function vaciarCarrito() {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  listaResumen.innerHTML = "";
  totalResumen.innerText = "Total: S/ 0.00";
}