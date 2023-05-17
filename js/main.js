//Programa de venta de entradas, donde el precio final dependa del evento elegido, cantidad de entradas, cargos por servicio, cuantas cuotas, entre otras.

// Variables de las Ventanas Emergentes traidas del HTML para el pedido de Entradas.
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

// Variables de los datos ingresados por el usuario.
let usuario = document.getElementById("usuario");
const dni = document.getElementById("dni");
let mail = document.getElementById("mail");
const cantidad = document.getElementById("cantidad"); // Selección de cantidad de entradas.
let interes = "";

// Funcion constructora de objetos de entradas a los conciertos.
const cargosPorServicio = 350;
class Entrada {
constructor(id, date, importe, cargosPorServicio, img) {
    this.id = id;
    this.date = date;
    this.importe = importe;
    this.cargosPorServicio = cargosPorServicio;
    this.img = img;
}

importeConCPS() {
    return this.importe + this.cargosPorServicio;
}
}

const concerts = document.getElementById("concerts");
const entradas = [];

function traerEntradas(){
    fetch("../assets/entradas.json") // JSON con datos de cada entrada a los conciertos.
    .then((response) => response.json())
    .then((data) => {
        data.forEach((entrada) => {
        entradas.push(
            new Entrada(
                entrada.id,
                entrada.date,
                entrada.importe,
                entrada.cargosPorServicio,
                entrada.img
            )
        );
    });

    entradas.forEach((entrada) => {
    const card = document.createElement("div");
    card.innerHTML += `<a><img class="flyer" id="${entrada.id}" src="../assets/${entrada.img}" alt="${entrada.date}"></a>`;
        card.addEventListener("click", mostrarModal);
        concerts.appendChild(card);
        });
    });

    //Se nos abre un Modal para llenar el formulario de compra.
    function mostrarModal(e) {
    const id = parseInt(e.target.id);
    const entradaElegida = entradas.find((entrada) => entrada.id === id);
    // Al elegir el concierto, haciendo click sobre el ya se guarda y se define la elección y el precio del mismo.
    modal.showModal();
        localStorage.setItem("concierto", entradaElegida.date);
        localStorage.setItem("importe", entradaElegida.importe);
    }
}

traerEntradas()

setInterval(() => { //Intervalo para actualizar la función y recargar el JSON que trae el FETCH por si llega a actualizarse con nuevos conciertos, sin necesidad de recargar la página.
    traerEntradas()
},30000)

// Todo se almacena en el LocalStorage para usarlo en la pantalla final y el usuario tenga acceso a la información.
function guardarFormulario() {
// Al no estar incluidas las librerías en esta entrega aún no puedo validar estos datos, pero se hará en la entrega final.
// Guardamos el precio de todas las entradas en una variable y le sumamos los cargosPorServicio.
let valorFinal = 0;
for (let i = 0; i < cantidad.value; i++) {
    valorFinal += Number(localStorage.getItem("importe")) + cargosPorServicio;
}

const cuotas = parseInt(document.getElementById("cuotas").value);
let total;

  switch (cuotas) { // Selección de Cuotas.
    case 1:
        total = valorFinal.toFixed(2);
        interes = 0;
        break;
    case 3:
        total = (valorFinal / 3 * 1.1).toFixed(2);
        interes = 10;
        break;
    case 6:
        total = (valorFinal / 6 * 1.15).toFixed(2);
        interes = 15;
        break;
}
if(!isNaN(dni.value) && dni.value != null && dni.value != "" && dni.value.length>=7 && dni.value.length<=8 && usuario.value != "" && mail.value != ""){ //Condicional para que no se ponga cualquier número o palabra de DNI.
    Swal.fire({
        title: 'Error!',
        text: 'Has ingresado el DNI incorrectamente.',
        icon: 'error',
        confirmButtonText: 'Intentar de Nuevo'
    })
    modal.close();
    localStorage.clear();
}
else{
    function redireccionar() {
        guardarFormulario();
        window.location.href = "gracias2.html";
    }
    const enviar = document.getElementById("enviar");
    enviar.addEventListener("click", redireccionar);
    localStorage.setItem("usuario", usuario.value.trim().toUpperCase());
    localStorage.setItem("dni", dni.value.trim());
    localStorage.setItem("mail", mail.value.trim());
    localStorage.setItem("cantidad", cantidad.value);
    localStorage.setItem("total", total);
    localStorage.setItem("cuotas", cuotas);
    localStorage.setItem("CPS", cargosPorServicio);
    localStorage.setItem("valorFinal", valorFinal);
    localStorage.setItem("interes", interes);
}
}

// Evento para cerrar las Ventana Emergentes y limpiar el Local Storage.
closeModal.addEventListener("click", () => {
    modal.close();
    localStorage.clear();
});

