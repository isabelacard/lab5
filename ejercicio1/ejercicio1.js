const opciones = ["PIEDRA", "PAPEL", "TIJERA"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let jugar = true

while (jugar) {

    let computadora = opciones[getRandomInt(3)]

    let usuario = prompt("Juegue PIEDRA, PAPEL o TIJERA").toUpperCase();

    alert(computadora)

    if (usuario === computadora) {
        alert("¡ESTAMOS EMPATADOS!");
    } else if (
        (usuario === "PIEDRA" && computadora === "TIJERA") ||
        (usuario === "PAPEL" && computadora === "PIEDRA") ||
        (usuario === "TIJERA" && computadora === "PAPEL")
    ) {
        alert("¡FELICIDADES...GANASTE! 😄");
    } else {
        alert("LO SIENTO...PERDISTE 🥺");
    }



    let respuesta = prompt("¿Quieres jugar de nuevo? (S/N)").toUpperCase();
    if (respuesta === "N") {
        jugar = false;
        alert("GRACIAS POR JUGAR <3");
    }
}

