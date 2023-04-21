//Programa de venta de entradas, donde el precio final dependa del evento elegido, cantidad de entradas, cargos por servicio, cuantas cuotas, entre otras.

alert("Bienvenido al sector de Venta de Entradas de Meier!")
let exito1 = false //exito1, exito2, exito3 y exito 4 son variables que determinan el volver a intentar el ingreso de un dato mal cargado.
let resultado = 0

while(exito1 == false){
let cantidad = parseInt(prompt("Cuantas entradas desea adquirir?")) //Selección de cantidad de entradas.
if(parseInt(cantidad) && cantidad >= 1 &&cantidad <= 6 ){
    console.log("Cantidad de entradas: " + cantidad)
exito1 = true

for (let i = 0; i < cantidad; i++) {

    let usuario = prompt("Porfavor, ingrese su nombre completo!").trim().toUpperCase() //Nombre de usuario.
    console.log("Nombre de usuario: " + usuario.trim().toUpperCase()) //Todos los datos iran apareciendo y guardandose en consola.
    let exito2 = false
        while(exito2 == false){

        let dni = prompt("Porfavor, ingrese su DNI!") //DNI.
        if(!isNaN(dni) && dni != null && dni != "" && dni.length>=7 && dni.length<=8){ //Condicional para que no se ponga cualquier número o palabra de DNI.
            console.log("DNI: " + dni.trim())
            exito2 = true

            let exito3 = false
            while(exito3 == false ){

                    const cargosPorServicio = 350
                    function Entrada(id, fecha, importe, lugar){ //Funcion constructora de objetos de entradas a los conciertos.
                    
                        this.id = id
                        this.fecha = fecha
                        this.importe = importe
                        this.lugar = lugar
                        this.importeConCPS = function (){ //Funcion dentro de funcion.
                            return this.importe + cargosPorServicio
                        }
                    
                    }

                    const entrada1 = new Entrada(1, "14/01", 1000, "recoleta") 
                    const entrada2 = new Entrada(2, "02/02", 1500, "villacrespo")
                    const entrada3 = new Entrada(3, "09/04", 2000, "moron") 

                    const arrayEntradas = [entrada1, entrada2, entrada3]

                    function encontrarEntradas(){ //Funcion para encontrar el concierto deseado gracias al metodo find.
                        let palabraClave = prompt("Ingrese el concierto al que desea asistir (recoleta, villacrespo o moron.)! ").trim()  //Selección de evento y lugar.
                        let concierto = arrayEntradas.find((entrada) => entrada.lugar === palabraClave)

                        if(concierto !== undefined){
                            exito3 = true
                            console.log("CONCIERTO: " + concierto.lugar.toUpperCase() +" "+ concierto.fecha)
                            alert("El precio de tu entrada es: $" + concierto.importe)
                            alert("El precio más cargos de servicio es: $" + concierto.importeConCPS())
                            console.log("PRECIO DE ENTRADA: $" + concierto.importeConCPS())
                            resultado = resultado + concierto.importeConCPS()
                        }else{
                            alert("No se encontro ningunga coincidencia con: " + palabraClave + ". Ingrese nuevamente!")
                        }
                    }

                    encontrarEntradas()

                }
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
        console.log("IMPORTE FINAL: ARS$"+ resultado.toFixed(2))
        alert("Muchas gracias por adquirir sus entradas, nos vemos en el show!")
        exito4 = true
        break;
    case parseInt(3):
        resultado = resultado / 3
        resultado = resultado + resultado * 0.10
        alert("El importe final a pagar es ARS$" + resultado.toFixed(2) + " en 3 cuotas con una tasa de interes del 10%.")
        console.log("IMPORTE FINAL EN 3 CUOTAS: ARS$"+ resultado.toFixed(2))
        alert("Muchas gracias por adquirir sus entradas, nos vemos en el show!")
        exito4 = true
        break;
    case parseInt(6):
        resultado = resultado / 6
        resultado = resultado + resultado * 0.15
        alert("El importe final a pagar es ARS$" + resultado.toFixed(2) + " en 6 cuotas con una tasa de interes del 15%.")
        console.log("IMPORTE FINAL EN 6 CUOTAS: ARS$"+ resultado.toFixed(2))
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

