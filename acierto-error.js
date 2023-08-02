function acierto(descubiertas){
    descubiertas.forEach(function(elemento)
    {
       elemento.classList.add("acertada");
    })
    document.querySelector("#sonido-acierto").cloneNode().play();
    }
    
    function error(descubiertas){
        descubiertas.forEach(function (elemento){
            elemento.classList.add("error");
        })
        document.querySelector("#sonido-error").cloneNode().play();
        setTimeout(function(){
            descubiertas.forEach(function(elemento){
                elemento.classList.remove("descubierta");
                elemento.classList.remove("error");
            })
        },1000);
    }