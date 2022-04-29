const listaProductos = [{ id: 1, cod: "C001", descrip: "Cuaderno", precio: 30 }, { id: 2, cod: "L001", descrip: "Lapicero", precio: 50 }, { id: 1, cod: "R001", descrip: "Regla", precio: 70 }]

const compraTotal = []

function mostrar() {
    let producto = document.getElementById("listaProducto").value;
    let cantidad = document.getElementById("cantidad").value;
    console.log(producto)

    function busqueda(product) {
        return product.descrip === producto;
    }
    console.log(listaProductos.find(busqueda));

    productoEncontrado = listaProductos.find(busqueda)

    compraTotal.push((productoEncontrado.precio * cantidad) -  (productoEncontrado.precio * cantidad * 0.20))

    let suma = 0;
    let lista = "";

    for (let i = 0; i < compraTotal.length; i++) {
        suma += compraTotal[i];
        lista += compraTotal[i] + "<br>"
    }
    localStorage.setItem('totalPagar', suma);


    document.getElementById("datos").innerHTML = "<div>" + lista + "</div>"

    console.log(compraTotal.length)

    console.log("Total a pagar", suma)
    let sumaStorage = localStorage.getItem('totalPagar');

    document.getElementById("total").innerHTML = "<span>total a pagar: " + sumaStorage + "</span>"
    console.log("total a pagar desde storage", sumaStorage)
}


let cantidadImp = document.getElementById('cantidad');
cantidadImp.addEventListener('keyup', function (e) {
    let keycode = e.keyCode || e.which;
    if (keycode == 13) {
        //alert("Enter!");
        mostrar();
    }
});

botonCalcular.onclick = function () { mostrar() }