var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15,
      strech: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
  });
  
  function calcularPrecio() {
    var select = document.getElementById("opcion_precio_1");
    var valorSeleccionado = select.value;
    var precio;
    var imagenSrc;
  
    switch (valorSeleccionado) {
        case "0":
          precio = 15.00; // Precio de la camisa
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(400 mb).jpg";
          break;
        case "1":
          precio = 22.00; // Precio del pantalón
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(400 mb).jpg";
          break;
        case "2":
          precio = 29.00; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(400 mb).jpg";
          break;
        case "3":
          precio = 36.00; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(400 mb).jpg";
          break;
        case "4":
          precio = 43.00; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(400 mb).jpg"; //
          break;
        case "5":
          precio = 50.00; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(400 mb).jpg"; //
          break;
        default:
          precio = 0; // Valor por defecto si no se selecciona ninguna opción válida
          imagenSrc ="";
          break;
      }
  
    var precioElemento = document.getElementById("precio");
    precioElemento.textContent = "S/" + precio;
  
    var imagenElemento = document.getElementById("seleccion_img");
    imagenElemento.src = imagenSrc;
  }
  
  function calcularPrecio2() {
    var select = document.getElementById("opcion_precio_2");
    var valorSeleccionado = select.value;
    var precio;
    var imagenSrc;
  
    switch (valorSeleccionado) {
        case "1": 
          precio = 60.00; // Precio de la camisa
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(50 mb).jpg" ;
          break;
        case "2":
          precio = 62.00; // Precio del pantalón
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(60 mb).jpg";
          break;
        case "3":
          precio = 64.00; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(70 mb).jpg";
          break;
        case "4":
          precio = 66.00; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(80 mb).jpg";
          break;
        case "5":
          precio = 68.00; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(90 mb).jpg";
          break;
        case "6":
          precio = 70.00; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(100 mb).jpg";
          break;
        case "7":
          precio = 100; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(200 mb).jpg";
          break;
        case "8":
          precio = 130; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(300 mb).jpg";
          break;
        case "9":
          precio = 160; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(400 mb).jpg";
          break;
        case "10":
          precio = 190; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(500 mb).jpg";
          break;
        case "11":
          precio = 235; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(600 mb).jpg";
          break;
        case "12":
          precio = 280; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(700 mb).jpg";
          break;
        case "13":
          precio = 325; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(800 mb).jpg";
          break;
        case "14":
          precio = 370; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/PLANES INTERNET(900 mb).jpg";
          break;
        case "15":
          precio = 415; // Precio del vestido
          imagenSrc = "PLANES INTERNET HOGAR/NUEVO-PRUEBA.jpg";
          break;
      
        default:
          precio = 0; // Valor por defecto si no se selecciona ninguna opción válida
          imagenSrc = "";
          break;
      }
  
    var precioElemento = document.getElementById("precio2");
    precioElemento.textContent = "S/" + precio;
  
    var imagenElemento = document.getElementById("seleccion_img2");
    imagenElemento.src = imagenSrc;
  }
  
  window.onload = function () {
    var select1 = document.getElementById("opcion_precio_2");
    select1.selectedIndex = 0;
    calcularPrecio();
    var select2 = document.getElementById("opcion_precio_1");
    select2.selectedIndex = 0;
    calcularPrecio2();
  };
  
  var carrito = [];
  
  function agregarAlCarrito(plan) {
    var imagenSeleccionada = document.getElementById("seleccion_img").src;
  
    plan.imagen = imagenSeleccionada;
  
    carrito.push(plan);
    actualizarCarrito();
  }
  
  function actualizarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }