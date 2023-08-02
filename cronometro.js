function iniciaCronometro(){

let segundos=10;
let minutos=0;
let segundosTexto;
let minutosTexto;
let cronometro;


function actualizaContador(){

segundos--;

if(segundos<0){
    segundos=59;
    minutos--;
}

if(minutos<0){
    segundos=0;
    minutos=0;
    clearInterval(cronometro);
}
segundosTexto=segundos;
minutosTexto=minutos;

if(segundos<10){
    segundosTexto='0'+segundos;
}

if(minutos<10){
    minutosTexto='0'+minutos;
}

document.querySelector("#minutos").innerText=minutosTexto;
document.querySelector("#segundos").innerText=segundosTexto;
}

cronometro=setInterval(actualizaContador,1000);
}