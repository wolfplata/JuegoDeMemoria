let tarjetas1= ["🤓","🤡", "🤠","😎","🤑","😵","🤕","😍"];

let tarjetas2= [["🤓","🤡"], ["🤠","😎"],["🤑","😵"],["🤕","😍"]];

let tarjetas3= [["🧠","💑"],[ "👒","🎩"],["🧦","🌂"],["💍","👓"]];

let tarjetas4= [["🐶","🐱"], ["🐹","🐼"],["🙈","🐮"],["🐷","🐸"]];

let nivelActual=0;

let niveles=[
    {
        tarjetas: tarjetas2[0],
        movimientosMax: 3
    },
    {
        tarjetas: tarjetas2[0].concat(tarjetas2[1]),
        movimientosMax: 10
    },
    {
        tarjetas: tarjetas2[0].concat(tarjetas2[1],tarjetas2[2]),
        movimientosMax: 15
    },
    {
        tarjetas: tarjetas2[0].concat(tarjetas2[1],tarjetas2[2],tarjetas2[3]),
        movimientosMax: 20
    },
    {
        tarjetas: tarjetas2[0].concat(tarjetas3[0],tarjetas4[0],tarjetas2[1],tarjetas3[1],tarjetas4[1]),
        movimientosMax: 40
    }
];



//console.log(tarjetas3[4]);

/*
let totalTarjetas = tarjetas1.concat(tarjetas2,tarjetas3);

console.log(totalTarjetas);
*/

//ejemplo de un array anidado
/*
let arrayAnidado = [
    ["🤓","🤡", "🤠","😎","🤑","😵","🤕","😍"],
    ["🧠","💑", "👒","🎩","🧦","🌂","💍","👓"],
    ["🐶","🐱", "🐹","🐼","🙈","🐮","🐷","🐸"]
 ];
*/
 //console.log(arrayAnidado);

 //console.log(arrayAnidado[0][3]) te muestra el primer array y en la posición 3

//let totalTarjetas=tarjetas2.concat(tarjetas2);
let movimientos=0;