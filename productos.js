const productos = {
    teclados: [
        { nombre: "Teclado Mecánico RGB", precioOriginal: 60, imagen: "assets/teclado.jpg" }
    ],
    mouses: [
        { nombre: "Mouse Gamer Inalámbrico", precioOriginal: 40, imagen: "assets/mouse.jpg" }
    ],
    cases: [
        { nombre: "Case CPU con RGB", precioOriginal: 100, imagen: "assets/case.jpg" }
    ],
    procesadores: [
        { nombre: "Procesador Ryzen 7", precioOriginal: 300, imagen: "assets/procesador.jpg" }
    ]
};

Object.values(productos).forEach(categoria => {
    categoria.forEach(producto => {
        producto.precio = (producto.precioOriginal * 0.85).toFixed(2);
    });
});
