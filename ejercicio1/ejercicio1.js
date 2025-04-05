const opciones = ["PIEDRA", "PAPEL", "TIJERA"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let computadora = opciones[getRandomInt(3)]

let jugar = true

while (jugar) {
    let usuario = prompt("Juegue PIEDRA, PAPEL o TIJERA (Escriba SALIR para terminar").toUpperCase();

    alert(computadora)
}