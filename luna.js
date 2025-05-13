document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { id: 1, nombre: "Remera Oversize", precio: 8500, img: "remera1.jpg" },
    { id: 2, nombre: "Pantalón", precio: 6200, img: "pantalon1.jpg" },
    { id: 3, nombre: "Remera Oversize", precio: 8200, img: "remera2.jpg" },
    { id: 4, nombre: "Remera y pantalón", precio: 16200, img: "oufit1.jpg" },
    { id: 5, nombre: "Remera Oversize", precio: 7500, img: "remera3.jpg" },
    { id: 6, nombre: "Remera y pantalón", precio: 17200, img: "oufit2.jpg" },
    { id: 7, nombre: "Pantalón", precio: 8200, img: "pantalon2.jpg" },
    { id: 8, nombre: "Remera y pantalón", precio: 18200, img: "oufit3.jpg" },
    { id: 9, nombre: "Remera", precio: 7200, img: "remera4.jpg" },
    { id: 10, nombre: "Pantalón", precio: 11200, img: "pantalon4.jpg" },
    { id: 11, nombre: "Remera y pantalón", precio: 15200, img: "oufit4.jpg" },
    { id: 12, nombre: "Remera y riñonera", precio: 14100, img: "rememasriño.jpg" },
    { id: 13, nombre: "Pantalón", precio: 10400, img: "pantalon5.jpg" },
    { id: 14, nombre: "Buzo", precio: 10200, img: "busito.jpg" },
    { id: 15, nombre: "Pantalón", precio: 9200, img: "pantalon6.jpg" },
    { id: 16, nombre: "Remera y bermuda", precio: 13500, img: "oufit5.jpg" },
    { id: 17, nombre: "Pantalón", precio: 12200, img: "pantalon7.jpg" },
    { id: 18, nombre: "Top y pantalón", precio: 13200, img: "oufit7.jpg" },
    { id: 19, nombre: "Remera y pantalón", precio: 16200, img: "oufit6.jpg" },
    { id: 20, nombre: "Campera", precio: 23200, img: "campera.jpg" }
  ];

  const contenedor = document.getElementById("contenedor-productos");
  const carrito = [];
  const panelCarrito = document.getElementById("panelCarrito");
  const listaCarrito = document.getElementById("listaCarrito");
  const total = document.getElementById("total");

  function renderProductos() {
    productos.forEach(prod => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p class="precio">$${prod.precio.toLocaleString()}</p>
        <button class="btn-agregar" data-id="${prod.id}">Añadir al carrito</button>
      `;
      contenedor.appendChild(div);
    });
  }

  function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let suma = 0;
    carrito.forEach(item => {
      suma += item.precio;
      const li = document.createElement("li");
      li.innerHTML = `${item.nombre} - $${item.precio.toLocaleString()} 
        <button class="eliminar" data-id="${item.id}">❌</button>`;
      listaCarrito.appendChild(li);
    });
    total.textContent = `Total: $${suma.toLocaleString()}`;
  }

  contenedor.addEventListener("click", e => {
    if (e.target.classList.contains("btn-agregar")) {
      const id = Number(e.target.dataset.id);
      const producto = productos.find(p => p.id === id);
      carrito.push(producto);
      actualizarCarrito();
    }
  });

  listaCarrito.addEventListener("click", e => {
    if (e.target.classList.contains("eliminar")) {
      const id = Number(e.target.dataset.id);
      const index = carrito.findIndex(p => p.id === id);
      if (index !== -1) {
        carrito.splice(index, 1);
        actualizarCarrito();
      }
    }
  });

  document.getElementById("abrirCarrito").addEventListener("click", () => {
    panelCarrito.classList.add("open");
  });

  document.getElementById("cerrarCarrito").addEventListener("click", () => {
    panelCarrito.classList.remove("open");
  });

  renderProductos();
});

