const compraTotal = []
botonCalcular.onclick = function mostrar() {
    let producto = document.getElementById("listaProducto").value;
    let cantidad = document.getElementById("cantidad").value;
    console.log(producto)
  
    if(producto=="Cuaderno"){
        let precio=30
        let descuento = 0.15
        console.log(precio * cantidad * descuento)
        compraTotal.push(precio * cantidad * descuento)
    }else if(producto=="Lapicero"){
        let precio=50
        let descuento = 0.20
        console.log(precio * cantidad * descuento)
        compraTotal.push(precio * cantidad * descuento)
    }else if(producto=="Regla"){
        let precio=70
        let descuento = 0.25
        console.log(precio * cantidad * descuento)
        compraTotal.push(precio * cantidad * descuento)
    }
    console.log("Total a pagar", compraTotal)

    let suma = 0;

    for(let i=0; i<compraTotal.length; i++){
        suma += compraTotal[i];
    }

    console.log("Total a pagar", suma)
}