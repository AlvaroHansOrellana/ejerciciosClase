/* Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3 */


function cuentaNombres(cadena) {
    return cadena.split(" ").length;
    }
console.log(cuentaNombres("Alvaro Hans Orellana Dalsgaard-Bohsen"));

/*let nombre = "Juan Pedro Carlos"
let result = cuentaNombres(nombre); <<< erróneo(sobra) */