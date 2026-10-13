
const inventario = new Inventario();

const codigo = document.getElementById("codigo");
const nombre = document.getElementById("nombre");
const cantidad = document.getElementById("cantidad");
const costo = document.getElementById("costo");
const detalles = document.getElementById("detalles");

function mostrar(mensaje) {
    detalles.innerHTML = mensaje;
}

document.getElementById("btnAgregar").addEventListener("click", function () {
    if (
        codigo.value.trim() === "" ||
        nombre.value.trim() === "" ||
        cantidad.value.trim() === "" ||
        costo.value.trim() === ""
    ) {
        mostrar("<p>Completa todos los campos.</p>");
        return;
    }

    if (
        !Number.isFinite(Number(codigo.value)) ||
        !Number.isFinite(Number(cantidad.value)) ||
        !Number.isFinite(Number(costo.value)) ||
        !Number.isInteger(Number(codigo.value)) ||
        Number(cantidad.value) < 0 ||
        Number(costo.value) < 0
    ) {
        mostrar("<p>Verifica los datos numericos. El codigo debe ser entero.</p>");
        return;
    }

    const producto = new Producto(
        codigo.value,
        nombre.value.trim(),
        cantidad.value,
        costo.value
    );

    if (inventario.agregar(producto)) {
        mostrar("<p>Producto agregado correctamente.</p>" + producto.infoHtml());

        codigo.value = "";
        nombre.value = "";
        cantidad.value = "";
        costo.value = "";
    } else {
        mostrar("<p>Ya existe un producto con ese codigo.</p>");
    }
});

document.getElementById("btnBuscar").addEventListener("click", function () {
    if (codigo.value.trim() === "" || !Number.isInteger(Number(codigo.value))) {
        mostrar("<p>Escribe un codigo entero para buscar.</p>");
        return;
    }

    const producto = inventario.buscar(codigo.value);

    if (producto !== null) {
        mostrar("<h3>Producto encontrado</h3>" + producto.infoHtml());
    } else {
        mostrar("<p>No se encontro el producto.</p>");
    }
});

document.getElementById("btnEliminar").addEventListener("click", function () {
    if (codigo.value.trim() === "" || !Number.isInteger(Number(codigo.value))) {
        mostrar("<p>Escribe un codigo entero para eliminar.</p>");
        return;
    }

    const producto = inventario.eliminar(codigo.value);

    if (producto !== null) {
        mostrar("<h3>Producto eliminado</h3>" + producto.infoHtml());
    } else {
        mostrar("<p>No se encontro el producto.</p>");
    }
});

document.getElementById("btnRecuperar").addEventListener("click", function () {
    mostrar(
        "<h3>Listado como texto</h3><pre>" +
        inventario.recuperarListado() +
        "</pre>"
    );
});

document.getElementById("btnPrimero").addEventListener("click", function () {
    const producto = inventario.extraerPrimero();

    if (producto !== null) {
        mostrar("<h3>Primer producto extraido</h3>" + producto.infoHtml());
    } else {
        mostrar("<p>El inventario esta vacio.</p>");
    }
});

document.getElementById("btnUltimo").addEventListener("click", function () {
    const producto = inventario.extraerUltimo();

    if (producto !== null) {
        mostrar("<h3>Ultimo producto extraido</h3>" + producto.infoHtml());
    } else {
        mostrar("<p>El inventario esta vacio.</p>");
    }
});

document.getElementById("btnListar").addEventListener("click", function () {
    mostrar(inventario.listar());
});

document.getElementById("btnInverso").addEventListener("click", function () {
    mostrar(inventario.listarInverso());
});

document.getElementById("btnLimpiar").addEventListener("click", function () {
    codigo.value = "";
    nombre.value = "";
    cantidad.value = "";
    costo.value = "";

    mostrar("<p>Campos limpiados.</p>");
});