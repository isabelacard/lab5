let frutas = ["manzana", "banano", "uva", "pera", "sandia", "kiwi", "naranja"]

console.log (frutas)

frutas.sort()

function SingularAplural(palabra) {
    if (palabra.endsWith("s")) {
        return palabra
    }
    return palabra + "s"
}

let frutasPlural = [];

for (let fruta of frutas) {
    frutasPlural.push(SingularAplural(fruta));
    console.log(SingularAplural(fruta));
}

function existeFruta(nombreFruta) {
    return frutas.includes(nombreFruta);
}

console.log(existeFruta("mango")); 
console.log(existeFruta("uva")); 


let frutasCortas = frutas.filter(fruta => fruta.length <= 4);
console.log(frutasCortas);

function eliminarFruta(nombreFruta) {
    const index = frutas.indexOf(nombreFruta);
    if (index !== -1) {
        frutas.splice(index, 1);
        return true;
    }
    return false;
}