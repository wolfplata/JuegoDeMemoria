function finalizar(){
  if(nivelActual<niveles.length-1){
    document.querySelector(".sube-nivel").classList.add("visible");
    document.querySelector("#sonido-subenivel").play();
  }else{
    document.querySelector(".end-game").classList.add("visible");
    document.querySelector("#sonido-endgame").play();
  }
  
    
}