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