const compraTotal = []

function mostrar() {
    let producto = document.getElementById("listaProducto").value;
    let cantidad = document.getElementById("cantidad").value;
    console.log(producto)

    if (producto == "Cuaderno") {
        let precio = 30
        let descuento = 0.15
        console.log(precio * cantidad * descuento)
        compraTotal.push(precio * cantidad * descuento)
    } else if (producto == "Lapicero") {
        let precio = 50
        let descuento = 0.20
        console.log(precio * cantidad * descuento)
        compraTotal.push(precio * cantidad * descuento)
    } else if (producto == "Regla") {
        let precio = 70
        let descuento = 0.25
        console.log(precio * cantidad * descuento)
        compraTotal.push(precio * cantidad * descuento)
    }
    console.log("compra total", compraTotal)
    

    let suma = 0;
    let lista = "";

    for (let i = 0; i < compraTotal.length; i++) {
        suma += compraTotal[i];
        lista += compraTotal[i] + "<br>"
    }
    localStorage.setItem('totalPagar', suma);
    

    document.getElementById("datos").innerHTML = "<div>"+lista+"</div>"

    //document.getElementById("total").innerHTML = "<span>total a pagar: "+suma+"</span>"
    console.log(compraTotal.length)

    console.log("Total a pagar", suma)
    let sumaStorage = localStorage.getItem('totalPagar');

    document.getElementById("total").innerHTML = "<span>total a pagar: "+sumaStorage+"</span>"
    console.log("total a pagar desde storage", sumaStorage)
}


let cantidadImp = document.getElementById('cantidad');
cantidadImp.addEventListener('keyup', function(e) {
  let keycode = e.keyCode || e.which;
  if (keycode == 13) {
    //alert("Enter!");
    mostrar();
  }
});

botonCalcular.onclick= function() {mostrar()}