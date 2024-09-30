//Validation email Regular Expression;

///Que empiece por letra o número, y tenga al menos un carácter Para el dominio (ej. @hotmail @gmail):
// Que tenga @
// Que tenga sólo letras, y al menos tres caracteres Para el dominio padre (ej. .es .com .org)
// Podrá tener dos (.es, .fr, .it,…) o tres letras (.com, .net, .org,..) o cuatro (.mobi, info,…)
// Debe ir al final, detrás de un punto
// *La expresión regular sería algo como: expresionregular@expresionregular.expresionregular. Ej: elena@gmail.com; pepe03@hotmail.es Crearemos un formulario que llamará a la función checkEmail. Esta función será la que ejecute la expresión regular. Se le pasará como argumento el valor del email recogido.
// Patrón RegExp: expresionregular@expresionregular.expresionregular

const regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$/
const regExp2 = /^[a-zA-Z]+@