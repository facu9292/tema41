let guardar = (id) => {
  localStorage.setItem("products", id);
};

fetch('js/products.json')
  .then(response => response.json())
  .then(data => {
      data.forEach(e => {
          document.querySelector('.scrol').innerHTML += /*html*/ `
              <a id="${e.id}" href="./producto.html" class="card" onClick="guardar(this.id)">
                  <div class="img center">
                      <img class="imagenprin" src="${e.img.src}" alt="${e.img.alt}" />
                  </div>
                  <div class="nombrearticulo">${e.name}</div>
                  <div class="precionuevoarticulo">${e.priceNew}</div>
                  <div class="precioviejoarticulo">${e.priceOld}</div>
              </a>`;
      });});
