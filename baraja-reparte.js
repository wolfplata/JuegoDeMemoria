function barajaTarjetas(tarjetas2) {
    let resultado;
    let totalTarjetas=tarjetas2.concat(tarjetas2);
    resultado=totalTarjetas.sort(function(){
        return 0.5-Math.random();
    })
    return resultado;
}

function reparteTarjetas(tarjetas2){

    let mesa=document.querySelector("#mesa");
    let tarjetasBarajadas=barajaTarjetas(tarjetas2);

    mesa.innerHTML="";

    tarjetasBarajadas.forEach(function(elemento){

        let tarjeta=document.createElement("div");

        tarjeta.innerHTML="<div class='tarjeta' data-valor= "+elemento+">"
        + "<div class='tarjeta__contenido'>" + elemento+ " </div>"
        + "</div>"

    mesa.appendChild(tarjeta);
    }) 

};