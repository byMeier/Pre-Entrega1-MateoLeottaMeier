//Programa de venta de entradas, donde el precio final dependa del evento elegido, cantidad de entradas, cargos por servicio, cuantas cuotas, entre otras.

alert("Bienvenido al sector de Venta de Entradas!")
let exito1 = false //exito1, exito2, exito3 y exito 4 son variables que determinan el volver a intentar el ingreso de un dato mal cargado.
let resultado = 0

while(exito1 == false){
let cantidad = parseInt(prompt("Cuantas entradas desea adquirir?")) //Selección de cantidad de entradas.
if(parseInt(cantidad) && cantidad >= 1 &&cantidad <= 6 ){
exito1 = true

for (let i = 0; i < cantidad; i++) {

    let importe = 0
    let usuario = prompt("Porfavor, ingrese su nombre completo!") //Nombre de usuario.
    console.log("Nombre de usuario: " + usuario.toUpperCase()) //Todos los datos iran apareciendo y guardandose en consola.
    let exito2 = false
    while(exito2 == false){

    let dni = prompt("Porfavor, ingrese su DNI!") //DNI.
    if(!isNaN(dni) && dni != null && dni != "" && dni.length>=7 && dni.length<=8){ //Condicional para que no se ponga cualquier número o palabra de DNI.
        console.log("DNI: " + dni)
        exito2 = true

        let exito3 = false
        while(exito3 == false ){
            let concierto = prompt("Ingrese el concierto al que desea asistir (recoleta, palermo o belgrano)!") //Selección de evento y lugar.
            switch(concierto){
                case "recoleta":
                    let recoleta = 1000
                    alert("El precio de la entradas es de ARS$" + recoleta) 
                    importe = recoleta + importe
                    exito3 = true
                    console.log("Concierto: Recoleta, ARS$"+ importe)
                    break;
                case "palermo":
                    let palermo = 1500
                    alert("El precio de la entradas es de ARS$" + palermo) 
                    importe = palermo + importe
                    exito3 = true
                    console.log("Concierto: Palermo, ARS$"+ importe)
                    break;
                case "belgrano":
                    let belgrano = 2000
                    alert("El precio de la entradas es de ARS$" + belgrano) 
                    importe = belgrano + importe
                    exito3 = true
                    console.log("Concierto: Belgrano, ARS$"+ importe)
                    break;
                default:
                    alert("Ese concierto no existe, intente nuevamente!")
                    break;
            }
        }

        const CPS = 350
        function cargosPorServicio(){ //Se agregan los Costos Por Servicio al Precio FInal.
            let precioFinal = importe + CPS
            alert("El importe más Cargos por Servicio de la entrada para " + usuario.toUpperCase() + " con DNI " + dni + " es: ARS$" + precioFinal) 
            resultado = precioFinal + resultado
            console.log("Precio con Cargos por Servicio: ARS$"+ resultado)
        }
        cargosPorServicio() //Llamado a la función.
    }else{
        alert("DNI inválido, intente nuevamente.")
    }
}

}

if(cantidad > 1){ //Indicación del precio total de todas las entradas.
    alert("El total es de ARS$" + resultado + ", desea continuar?")
    console.log("Precio final de todas las entradas: ARS$"+ resultado)
}

let exito4 = false

while(exito4 == false){

let cuotas = parseInt(prompt("En cuantas cuotas lo desea abonar?"))

switch(cuotas){ //Selección de Cuotas.
    case parseInt(1):
        alert("El importe final a pagar es ARS$" + resultado.toFixed(2) + " en 1 cuota sin interes!")
        console.log("importe final: ARS$"+ resultado.toFixed(2))
        alert("Muchas gracias por adquirir sus entradas, nos vemos en el show!")
        exito4 = true
        break;
    case parseInt(3):
        resultado = resultado / 3
        resultado = resultado + resultado * 0.10
        alert("El importe final a pagar es ARS$" + resultado.toFixed(2) + " en 3 cuotas con una tasa de interes del 10%.")
        console.log("importe final en 3 cuotas: ARS$"+ resultado.toFixed(2))
        alert("Muchas gracias por adquirir sus entradas, nos vemos en el show!")
        exito4 = true
        break;
    case parseInt(6):
        resultado = resultado / 6
        resultado = resultado + resultado * 0.15
        alert("El importe final a pagar es ARS$" + resultado.toFixed(2) + " en 6 cuotas con una tasa de interes del 15%.")
        console.log("importe final en 6 cuotas: ARS$"+ resultado.toFixed(2))
        alert("Muchas gracias por adquirir sus entradas, nos vemos en el show!")
        exito4 = true
        break;
    default:
        alert("Porfavor, ingrese un número de cuotas válido (1, 3 o 6).")    
        break;
}
}
}
else{
    alert("Porfavor, ingrese una cantidad de entradas válida (hasta 6).")
}
}