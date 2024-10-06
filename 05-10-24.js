// Crea una función que pida un número por parámetro y guarde su tabla de multiplicar en un array. El array será el valor devuelto
// Ejemplo --> Tabla del 3 --> [3,6,9,12,15,18,21,24,27,30["3x1=3","3x2=6","3x3=9","3x4=12","3x5=15","3x6=18","3x7=21","3x8=24","3x9=27","3x10=30"]


function crearTabla(numero) {
    let array = [];
    for (let i = 1; i < 10; i++) {
        array.push(numero + "x" + i + "=" + (numero * i));
    }
    return array;
}

console.log(crearTabla(1, 3, 6, 7));

// Ejercicio 2
// Crea una función que pida números por teclado (prompt) y mételos en un array. Cuando el usuario meta un 0, dejaremos de insertar(habrá que usar un bucle que pregunte constantemente). Por último, ordena los números ordenados de menor a mayor y devuelve el array. Prompt() devuelve un string. hay que convertirlo a entero con parseInt()

function pedirNumeros() {
    let numeros = []; 
    let numero; 

    do {
        numero = parseInt(prompt("Introduce un número (0 para detener):")); // Pedimos un número y lo convertimos a entero
        if (numero !== 0) { // Solo añadimos al array si el número no es 0
            numeros.push(numero); // Añadimos el número al array
        }
    } while (numero !== 0); // El bucle continúa hasta que se introduce un 0

    // Ordenamos el array de menor a mayor
    numeros.sort((a, b) => a - b);

    return numeros; // Devolvemos el array ordenado
}

let resultado = pedirNumeros();
console.log(resultado); // Muestra el array ordenado en la consola


// Ejercicio 3:
// Escriba un programa que pida un año y que escriba si es bisiesto o no. Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de 100 no lo son, aunque los múltiplos de 400 sí.

