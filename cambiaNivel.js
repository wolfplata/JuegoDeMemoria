function subeNivel(){
nivelActual++;
//document.querySelector("#sonido-subenivel").play();

if(nivelActual===0){
    document.querySelector("#sonido-mk1").play();
}
else if(nivelActual===1){
    document.querySelector("#sonido-mk2").play();
}
else if(nivelActual===2){
    document.querySelector("#sonido-mk3").play();
}
else if(nivelActual===3){
    document.querySelector("#sonido-mk4").play();
}
else{
    document.querySelector("#sonido-mk5").play();
}

}

function mk1(){
    document.querySelector("#sonido-mk1").play();
}

function stopSound(){
    document.querySelector("#sonido-gameover").pause();
    document.querySelector("#sonido-gameover").currentTime=0;
}

function actualizaNivel(){

let nivelTexto=nivelActual+1;

if(nivelTexto<10){
    nivelTexto="0"+nivelTexto;
}
document.querySelector("#nivel").innerText=nivelTexto;
}

function cargaNuevoNivel(){
    subeNivel();
    actualizaNivel();
    iniciar();
}