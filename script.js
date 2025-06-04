document.addEventListener("DOMContentLoaded", () => {
    const numeroWhatsApp = "51123456789";

    Object.keys(productos).forEach(categoria => {
        const contenedor = document.querySelector(`#${categoria} .productos`);

        productos[categoria].forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("producto");

            div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" width="150">
                <h3>${producto.nombre}</h3>
                <p class="precio-original">Antes: <span>$${producto.precioOriginal}</span></p>
                <p class="precio-oferta">Ahora: <strong>$${producto.precio}</strong></p>
                <button class="btn-comprar" data-nombre="${producto.nombre}" data-precio="${producto.precio}">Comprar</button>
            `;

            contenedor.appendChild(div);
        });
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-comprar")) {
            const nombre = e.target.getAttribute("data-nombre");
            const precio = e.target.getAttribute("data-precio");
            const mensaje = `Hola, estoy interesado en el producto *${nombre}* que cuesta *$${precio}*. ¿Está disponible?`;
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, "_blank");
        }
    });
});
