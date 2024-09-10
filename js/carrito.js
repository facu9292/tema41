document.addEventListener('DOMContentLoaded', () => {
    // Obtén el ID del producto almacenado en localStorage
    let idProducto = localStorage.getItem("products");

    // Función para mostrar el producto en el carrito
    const mostrarProductoEnCarrito = (producto) => {
        const carritoItems = document.getElementById('carrito-items');
        const itemHTML = `
            <div class="carrito-item" data-id="${producto.id}">
                <img src="${producto.img.src}" alt="${producto.img.alt}" class="imagenproducto" />
                <div class="info-producto">
                    <h2>${producto.name}</h2>
                    <p>Precio: <span class="precio">${producto.priceNew}</span></p>
                    <p>Talla: <span>${producto.talles}</span></p>
                    <p>Color: <span>${producto.color}</span></p>
                    <div class="cantidad">
                        <button class="btn-restar">-</button>
                        <input type="number" class="input-cantidad" value="1" min="1" />
                        <button class="btn-sumar">+</button>
                    </div>
                </div>
            </div>
        `;
        carritoItems.innerHTML += itemHTML;
    };

    // Función para calcular el total del carrito
    const calcularTotal = () => {
        const items = document.querySelectorAll('.carrito-item');
        let total = 0;
        items.forEach(item => {
            const precio = parseFloat(item.querySelector('.precio').textContent.replace('$', ''));
            const cantidad = parseInt(item.querySelector('.input-cantidad').value);
            total += precio * cantidad;
        });
        document.getElementById('total-precio').textContent = `$${total.toFixed(2)}`;
    };

    // Manejo de eventos para los botones de cantidad
    const manejarEventosCantidad = () => {
        document.querySelectorAll('.btn-sumar').forEach(boton => {
            boton.addEventListener('click', (event) => {
                const inputCantidad = event.target.previousElementSibling;
                inputCantidad.value = parseInt(inputCantidad.value) + 1;
                calcularTotal();
            });
        });

        document.querySelectorAll('.btn-restar').forEach(boton => {
            boton.addEventListener('click', (event) => {
                const inputCantidad = event.target.nextElementSibling;
                const nuevaCantidad = Math.max(parseInt(inputCantidad.value) - 1, 1);
                inputCantidad.value = nuevaCantidad;
                calcularTotal();
            });
        });

        document.querySelectorAll('.input-cantidad').forEach(input => {
            input.addEventListener('change', calcularTotal);
        });
    };

    // Obtén los datos de los productos
    fetch('js/products.json')
        .then(response => response.json())
        .then(data => {
            const productosEnCarrito = [];
            data.forEach(producto => {
                if (idProducto == producto.id) {
                    mostrarProductoEnCarrito(producto);
                    productosEnCarrito.push(producto);
                }
            });
            calcularTotal();
            manejarEventosCantidad();
        });
});
