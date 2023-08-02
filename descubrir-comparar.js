function descubrir() {
    let descubiertas;
    let tarjetasPendientes;
        //let descubiertas=document.querySelectorAll(".descubierta");
    let totalDescubiertas=document.querySelectorAll(".descubierta:not(.acertada)");
    
    if (totalDescubiertas.length >1){
    return;
    }
    
    this.classList.add("descubierta");

    document.querySelector("#sonido-carta").cloneNode().play();
    
    descubiertas=document.querySelectorAll(".descubierta:not(.acertada");
    if(descubiertas.length<2){
        return;
    }
    
    comparar(descubiertas);
    actualizaContador();

    tarjetasPendientes=document.querySelectorAll(".tarjeta:not(.acertada)");

    if(tarjetasPendientes.length===0){
      setTimeout(finalizar,1000);
    }
    }
    
    function comparar(descubiertas){
        if (descubiertas[0].dataset.valor===descubiertas[1].dataset.valor){
            acierto(descubiertas);
            }else{
            error(descubiertas);
            }
    }