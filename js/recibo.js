let contenedor = document.getElementById("compraFinal");
contenedor.innerHTML = 
`<h3 class="recibo"><strong> NOMBRE DE USUARIO: </strong>`+ localStorage.getItem("usuario")+` </h3>
<h3 class="recibo"><strong> DNI: </strong>`+ localStorage.getItem("dni")+` </h3>
<h3 class="recibo"><strong> EMAIL: </strong>`+ localStorage.getItem("mail")+` </h3>
<h3 class="recibo"><strong> CONCIERTO ELEGIDO: </strong>`+ localStorage.getItem("concierto")+` </h3>
<h3 class="recibo"><strong> CANTIDAD DE ENTRADAS: </strong>`+ localStorage.getItem("cantidad")+` </h3>
<h3 class="recibo"><strong> PRECIO DE LA ENTRADA: </strong>$`+ localStorage.getItem("importe")+` </h3>
<h3 class="recibo"><strong> CARGOS POR SERVICIO: </strong>$`+ localStorage.getItem("CPS") +` </h3>
<h3 class="recibo"><strong> VALOR FINAL: </strong>$`+ localStorage.getItem("valorFinal") +` </h3>
<h3 class="recibo"><strong> TOTAL A PAGAR: </strong>$`+ localStorage.getItem("total") +` en `+ localStorage.getItem("cuotas") +` cuotas con un `+ localStorage.getItem("interes") + `% de interes.</h3>`

const finalizar = document.getElementById("finalizar")
finalizar.addEventListener("click", () => {
    Swal.fire({
        title: 'Muchas Gracias!',
        text: 'Este recibo le llegara al mail junto a la factura de compra.',
        icon: 'success',
        confirmButtonText: 'OK'
    })
    });
