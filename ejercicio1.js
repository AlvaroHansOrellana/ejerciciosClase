// Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".

/*let nombre = "Ana";
let result = devuelveCaracteres(nombre); */

function devuelveCaracteres(nombre) {
    return nombre.toUpperCase().split('').join(' ');
}
console.log(devuelveCaracteres("Juan"));
