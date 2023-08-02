let tarjetas1= ["🤓","🤡", "🤠","😎","🤑","😵","🤕","😍"];

let tarjetas2= ["🧠","💑", "👒","🎩","🧦","🌂","💍","👓"];

let tarjetas3= ["🐶","🐱", "🐹","🐼","🙈","🐮","🐷","🐸"];

console.log(tarjetas3[4]);

/*
let totalTarjetas = tarjetas1.concat(tarjetas2,tarjetas3);

console.log(totalTarjetas);
*/

let arrayAnidado = [
    ["🤓","🤡", "🤠","😎","🤑","😵","🤕","😍"],
    ["🧠","💑", "👒","🎩","🧦","🌂","💍","👓"],
    ["🐶","🐱", "🐹","🐼","🙈","🐮","🐷","🐸"]
 ];

 console.log(arrayAnidado);

 //console.log(arrayAnidado[0][3]) te muestra el primer array y en la posición 3

let totalTarjetas=tarjetas1.concat(tarjetas1);

function barajaTarjetas() {
    let resultado;
    
    resultado=totalTarjetas.sort(function(){
        return 0.5-Math.random();
    })
    return resultado;
}

function reparteTarjetas(){

    let mesa=document.querySelector("#mesa");
    let tarjetasBarajadas=barajaTarjetas();

    mesa.innerHTML="";

    tarjetasBarajadas.forEach(function(elemento){

        let tarjeta=document.createElement("div");

        tarjeta.innerHTML="<div class='tarjeta' data-valor= "+elemento+">"
        + "<div class='tarjeta__contenido'>"+ elemento
        +" </div>"+
        "</div>"

    mesa.appendChild(tarjeta);
    })

};

function descubrir() {
let descubiertas;
    //let descubiertas=document.querySelectorAll(".descubierta");
let totalDescubiertas=document.querySelectorAll(".descubierta:not(.acertada)");

if (totalDescubiertas.length >1){
return;
}

this.classList.add("descubierta");

descubiertas=document.querySelectorAll(".descubierta:not(.acertada");
if(descubiertas.length<2){
    return;
}



comparar(descubiertas);
}

function comparar(descubiertas){
    if (descubiertas[0].dataset.valor===descubiertas[1].dataset.valor){
        acierto(descubiertas);
        }else{
        error(descubiertas);
        }
}

function acierto(descubiertas){
descubiertas.forEach(function(elemento)
{
   elemento.classList.add("acertada");
})
}

function error(descubiertas){
    descubiertas.forEach(function (elemento){
        elemento.classList.remove("descubierta");
    })

}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento)
{
elemento.addEventListener("click",descubrir);
});
