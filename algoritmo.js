let numero = prompt('Digita Número');
const valoresAceptados = /^[0-9]+$/;
if (numero.match(valoresAceptados)) {
    if (parseInt(numero) % 2 == 0) {
        alert(numero + " es par")
        for (var i=0; i<=numero; i = i+2){
            alert("numero "+i)
        }
    } else {
        alert(numero + " es impar")
        for (var i=0; i<=numero; i++){
            alert("numero "+i)
        }
    }
}else{
    alert(numero + " no es numero entero")
}

