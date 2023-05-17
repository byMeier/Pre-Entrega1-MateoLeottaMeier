//Programa de venta de entradas, donde el precio final dependa del evento elegido, cantidad de entradas, cargos por servicio, cuantas cuotas, entre otras.

//Variables de las Ventanas Emergentes traidas del HTML para el pedido de Entradas.
const openModal = document.getElementById("openModal")
const openModal2 = document.getElementById("openModal2")
const openModal3 = document.getElementById("openModal3")
const closeModal = document.getElementById("closeModal")
const modal = document.getElementById("modal")
//Variables de los datos ingresados por el usuario.
let usuario = document.getElementById("usuario")
const dni = document.getElementById("dni")
let mail = document.getElementById("mail")
const cantidad = document.getElementById("cantidad") //Selección de cantidad de entradas.
const enviar = document.getElementById("enviar")
let interes = ""

//Funcion constructora de objetos de entradas a los conciertos.
cargosPorServicio = 350
function Entrada(date, importe, img, cargosPorServicio){ 
    this.date = date
    this.importe = importe
    this.img = img
    this.importeConCPS = function (){ //Funcion dentro de funcion.
        return this.importe + cargosPorServicio
    }
}

const concerts = document.getElementById("concerts")
const entradas = [];

fetch("./assets/entradas.json") //JSON con datos de cada entrada a los conciertos.
.then(response => response.json())
.then(data => {
    data.forEach(Entrada => {
        entradas.push(new Entrada(Entrada.date, Entrada.importe, Entrada.cargosPorServicio, Entrada.img))
    })

    entradas.forEach(Entrada =>{
        concerts.innerHTML += //Ingresamos esto para que se vayan concatenando dentro del mismo contenedor y no se quede el ultimo solamente.
            `
            <div class="concertImg">
                <button id="openModal" class="popup"><img class="flyer" src="${Entrada.img}" alt="${Entrada.date}"></button>
            </div>
            <div>
                <h2>${Entrada.date}</h2>
                <h2>${Entrada.importe}</h2>
            </div>
            `
    })//Y asi es como inyectamos en nuestro HTML todos los productos en nuestra base de datos más facilmente y optimizado.

})

/*
//3 Tipos de entradas que se seleccionan desde el HTML.
const entrada1 = new Entrada("Recoleta 14/01", 1000, cargosPorServicio) 
const entrada2 = new Entrada("Musicleta 02/02", 1500, cargosPorServicio)
const entrada3 = new Entrada("Espacio Laberinto 09/04", 2000, cargosPorServicio)
*/


//Todo se almacena en el LocalStorage para usarlo en la pantalla final y el usuario tenga acceso a la información.
function guardarFormulario(){
    //Al no estar incluidas las librerias en esta entrega aún no puedo validar estos datos, pero se hará en la entrega final.
    //Guardamos el precio de todas las entradas en una variable y le sumamos los cargosPorServicio.
    let valorFinal = 0;
    for (i = 0; i < cantidad.value; i++) {
        valorFinal += Number(localStorage.getItem("importe")) + cargosPorServicio;
    }
    const cuotas = parseInt(document.getElementById("cuotas").value);
    let total;
    switch(cuotas){ //Selección de Cuotas.
        case 1:
            total = valorFinal.toFixed(2);
            interes = 0
            break;
        case 3:
            total = (valorFinal / 3 * 1.1).toFixed(2);
            interes = 10
            break;
        case 6:
            total = (valorFinal / 6 * 1.15).toFixed(2);
            interes = 15
            break;
    }
    localStorage.setItem("usuario", usuario.value.trim().toUpperCase()) 
    localStorage.setItem("dni", dni.value.trim())
    localStorage.setItem("mail", mail.value.trim())
    localStorage.setItem("cantidad", cantidad.value)
    localStorage.setItem("total", total)
    localStorage.setItem("cuotas", cuotas)
    localStorage.setItem("CPS", cargosPorServicio)
    localStorage.setItem("valorFinal", valorFinal)
    localStorage.setItem("interes", interes)
}

//Evento para cerrar las Ventana Emergentes y limpiar el Local Storage.
closeModal.addEventListener("click",()=>{modal.close(), localStorage.clear()})

//Al elegir el concierto, ya se guarda y se define la elección y el precio del mismo.
openModal.addEventListener("click",
    function concierto1(){ 
        modal.showModal()
        localStorage.setItem("concierto", Entrada.date)
        localStorage.setItem("importe", Entrada.importe)
    })/*
openModal2.addEventListener("click",     
    function concierto2(){ 
        modal.showModal()
        localStorage.setItem("concierto", entrada2.date)
        localStorage.setItem("importe", entrada2.importe)
    })
openModal3.addEventListener("click",
    function concierto3(){ 
        modal.showModal()
        localStorage.setItem("concierto", entrada3.date)
        localStorage.setItem("importe", entrada3.importe)
    })*/

    function redireccionar() {
        window.location.href = "gracias2.html";
        guardarFormulario()
    }

enviar.addEventListener("click", redireccionar)
