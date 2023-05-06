//Programa de venta de entradas, donde el precio final dependa del evento elegido, cantidad de entradas, cargos por servicio, cuantas cuotas, entre otras.
const cargosPorServicio = 350
function Entrada(date, importe){ //Funcion constructora de objetos de entradas a los conciertos.

    this.date = date
    this.importe = importe
    this.importeConCPS = function (){ //Funcion dentro de funcion.
        return this.importe + cargosPorServicio
    }

}

const entrada1 = new Entrada("Recoleta 14/01", 1000) 
const entrada2 = new Entrada("Musicleta 02/02", 1500)
const entrada3 = new Entrada("Espacio Laberinto 09/04", 2000)

//Ventanas Emergentes para el pedido de Entradas
const openModal1 = document.getElementById("openModal1")
const openModal2 = document.getElementById("openModal2")
const openModal3 = document.getElementById("openModal3")
const closeModal1 = document.getElementById("closeModal1")
const closeModal2 = document.getElementById("closeModal2")
const closeModal3 = document.getElementById("closeModal3")
const modal1 = document.getElementById("modal1")
const modal2 = document.getElementById("modal2")
const modal3 = document.getElementById("modal3")

openModal1.addEventListener("click", //Al elegir el concierto, ya se guarda y se define la elección y el precio del mismo.
    function concierto1(){ 
        modal1.showModal()
        let concierto = localStorage.setItem("concierto", entrada1.date)
        let importe = localStorage.setItem("importe", entrada1.importe)
    })
openModal2.addEventListener("click",     
    function concierto2(){ 
        modal1.showModal()
        let concierto = localStorage.setItem("concierto", entrada2.date)
        let importe = localStorage.setItem("importe", entrada2.importe)
    })
openModal3.addEventListener("click",     
    function concierto3(){ 
        modal1.showModal()
        let concierto = localStorage.setItem("concierto", entrada3.date)
        let importe = localStorage.setItem("importe", entrada3.importe)
    })

closeModal1.addEventListener("click",()=>{modal1.close(), localStorage.clear()/*, infoFinal.length = 0*/})
closeModal2.addEventListener("click",()=>{modal2.close(), localStorage.clear()/*, infoFinal.length = 0*/})
closeModal3.addEventListener("click",()=>{modal3.close(), localStorage.clear()/*, infoFinal.length = 0*/})

let resultado = 0
//let infoFinal = []

let usuario = document.getElementById("usuario")
const dni = document.getElementById("dni")
let mail = document.getElementById("mail")
const cantidad = document.getElementById("cantidad") //Selección de cantidad de entradas.
const enviar = document.getElementById("enviar")

function guardarFormulario(){
    //Al no estar incluidas las librerias en esta entrega aún no puedo validar estos datos, pero se hará en la entrega final.
    localStorage.setItem("usuario", usuario.value.trim().toUpperCase()) 
    //infoFinal.push(usuario.value.trim().toUpperCase())
    localStorage.setItem("dni", dni.value.trim())
    //infoFinal.push(dni.value.trim())
    localStorage.setItem("mail", mail.value.trim())
    //infoFinal.push(mail.value.trim())
    localStorage.setItem("cantidad", cantidad.value)
    //infoFinal.push(cantidad.value)
    //console.log(infoFinal)
}                

//Se ejecuta la funcion al hacer click en el boton "Enviar"
enviar.addEventListener("click", guardarFormulario)


/*

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

                    
                    }

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
*/


