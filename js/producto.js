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
            <div class="partesuperior">
    
        <img class="imagenproducto" src="${e.img.src}" alt="${e.img.alt}" />
            <a href="./index.html">
        <div class="volver"><i class="fa-solid fa-arrow-left"></i></div>
        </a>
        <a href="./carrito.html">
        <div class="carrito"><i class="fa-regular fa-cart-shopping"></i></div>
        </a>
    </div>
    <div class="partemedia">
        <div class="nombre">${e.name}</div>
        <div class="precioactual">${e.priceNew}</div>
        <div class="precioviejo">${e.priceOld}</div>
        <div class="opciones">
            <div class="talle">
            <label for="size">Selecciona tu talla:</label>
            <select id="size" name="size">
                <option value="s">${e.talles}</option>
                <option value="m">${e.tallem}</option>
                <option value="l">${e.talles}</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
            </select>
        </div>
            <div class="color">
            <label>Selecciona el color:</label>
            <div class="color-options">
                <label class="color-option">
                    <input type="radio" name="color" value="blanco">
                    <div class="color-preview" style="background-color: white;"></div>
                </label>
                <label class="color-option">
                    <input type="radio" name="color" value="gris">
                    <div class="color-preview" style="background-color: grey;"></div>
                </label>
                <label class="color-option">
                    <input type="radio" name="color" value="negro">
                    <div class="color-preview" style="background-color: black;"></div>
                </label>
                <label class="color-option">
                    <input type="radio" name="color" value="celeste">
                    <div class="color-preview" style="background-color: rgb(14, 137, 185);"></div>
                </label>
            </div>
        </div>

        </div>
    </div>
    <div class="partebaja">
        <a href="./carrito.html">
            <button class="btn-advanced">Add to cart</button>
        </a>
    </div>
            `


            }
        });
    });
