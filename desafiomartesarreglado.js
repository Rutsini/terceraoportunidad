function ingreso (si){
    si = prompt("¿Quieres calcular el monto por cuotas? si/no");
    if (si == "si"){
        valorDelProducto = parseInt(prompt ("Ingrese el precio del producto"));
        cuotas = parseInt(prompt("Ingresa el numero de cuotas"));
        calcularCuotas(valorDelProducto, cuotas) ;
        ingreso(si);
    }else {
        alert("No podemos ayudarlo en otra cosa por ahora. \nMuchas gracias por utilizar nuestra plataforma.") ;
    }
    
}

function calcularCuotas(valorDelProducto, cuotas, resultado) {
    switch (cuotas){
        case 6:
            resultado = valorDelProducto/cuotas;
            break;
        case 12:
            resultado = valorDelProducto/cuotas;
            break;
        case 18:
            resultado = (valorDelProducto/cuotas) * 1.15;
            break;
        default:
            alert("Los valores ingresados no son correctos")
            break;
    }
    alert("El precio por cuotas que debe abonar es de " + " " + resultado);
    
}

ingreso()