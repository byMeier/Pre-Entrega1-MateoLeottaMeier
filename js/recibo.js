let contenedor = document.getElementById("compraFinal");
contenedor.innerHTML = 
`<h3><strong> NOMBRE DE USUARIO: </strong>`+ localStorage.getItem("usuario")+` </h3>
<h3><strong> DNI: </strong>`+ localStorage.getItem("dni")+` </h3>
<h3><strong> EMAIL: </strong>`+ localStorage.getItem("mail")+` </h3>
<h3><strong> CONCIERTO ELEGIDO: </strong>`+ localStorage.getItem("concierto")+` </h3>
<h3><strong> CANTIDAD DE ENTRADAS: </strong>`+ localStorage.getItem("cantidad")+` </h3>
<h3><strong> PRECIO DE LA ENTRADA: </strong>$`+ localStorage.getItem("importe")+` </h3>
<h3><strong> CARGOS POR SERVICIO: </strong>$`+ localStorage.getItem("CPS") +` </h3>
<h3><strong> VALOR FINAL: </strong>$`+ localStorage.getItem("valorFinal") +` </h3>
<h3><strong> TOTAL A PAGAR: </strong>$`+ localStorage.getItem("total") +` en `+ localStorage.getItem("cuotas") +` cuotas con un `+ localStorage.getItem("interes") + `% de interes.</h3>`
