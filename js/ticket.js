// Obtener el ID del producto almacenado en localStorage
let idProducto = localStorage.getItem("products");

// Mostrar el ID del producto en una alerta


fetch('js/products.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(e => {
            // Comparar el ID del producto almacenado con el ID de cada producto en los datos
            if (idProducto == e.id) {
            
                document.querySelector("body").innerHTML = `
<div class="ticket">
        <div class="ticket-header">
            <h1>Gracias por tu compra</h1>
            <p class="ticket-date">Fecha: ${e.fecha}</p>
        </div>
        <div class="ticket-content">
            <div class="ticket-item">
                <img src="${e.img.src}" alt="${e.img.alt}" class="ticket-imagen" />
                <div class="ticket-info">
                    <h2>${e.name}</h2>
                    <p><strong>Precio:</strong> <span class="ticket-precio">${e.priceNew}</span></p>
                    <p><strong>Talla:</strong> ${e.talles}</p>
                    <p><strong>Color:</strong> ${e.color}</p>
                    <p><strong>Cantidad:</strong> ${e.cantidad}</p>
                    <p><strong>Total:</strong> <span class="ticket-total">${e.priceNew * e.cantidad}</span></p>
                </div>
            </div>
        </div>
        <div class="ticket-footer">
            <p>¡Gracias por comprar con nosotros!</p>
            <p>Visítanos en: <a href="https://www.ejemplo.com" target="_blank">www.ejemplo.com</a></p>
        </div>
    </div>

            `


            }
        });
    });