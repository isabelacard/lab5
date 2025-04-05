let frutas = ["manzana", "banano", "uva", "pera", "sandia", "kiwi", "naranja"]
console.log("Arreglo original de frutas:", frutas);


frutas.sort()
console.log("Frutas ordenadas alfabéticamente:", frutas);

function SingularAplural(palabra) {
    if (palabra.endsWith("s")) {
        return palabra
    }
    return palabra + "s"
}

let frutasPlural = [];

for (let fruta of frutas) {
    frutasPlural.push(SingularAplural(fruta));
}
console.log("Frutas en plural:", frutasPlural);

function existeFruta(nombreFruta) {
    return frutas.includes(nombreFruta);
}

console.log("¿Existe la fruta mango'?: ", existeFruta("mango")); 
console.log("¿Existe la fruta uva?: ", existeFruta("uva"));


let frutasCortas = frutas.filter(fruta => fruta.length <= 4);
console.log("Frutas con 4 letras o menos:", frutasCortas);

function eliminarFruta(nombreFruta) {
    const index = frutas.indexOf(nombreFruta);
    if (index !== -1) {
        frutas.splice(index, 1);
        return true;
    }
    return false;
}