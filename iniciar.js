function iniciar(){
    movimientos=0;
    reparteTarjetas(niveles[nivelActual].tarjetas);
    document.querySelector('#mov').innerText="00";
    maxContador();
    document.querySelector('#subenivel').classList.remove("visible");
    document.querySelector('#endgame').classList.remove("visible");
    document.querySelector('#gameover').classList.remove("visible");

    document.querySelectorAll(".tarjeta").forEach(function(elemento)
    {
    elemento.addEventListener("click",descubrir);
    });
    
    iniciaCronometro();
}

function reiniciar(){
    nivelActual=0;
    mk1();
    stopSound();
    actualizaNivel();
    iniciar();
}

iniciar();



document.querySelectorAll(".reiniciar").forEach(function(elemento){
    elemento.addEventListener("click",reiniciar);
})

document.querySelector("#subir").addEventListener("click",cargaNuevoNivel);