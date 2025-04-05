let frutas = ["manzana", "banano", "uva", "pera", "sandia", "kiwi", "naranja"]

console.log (frutas)

frutas.sort()

function SingularAplural(palabra) {
    if (palabra.endsWith("s")) {
        return palabra
    }
    return palabra + "s"
}
