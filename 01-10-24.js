// Given a sorted list of integers, square the elements and give the output in sorted order.
// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

function squaredNumbers (numeros) {
    let array = []; 
    let alCuadrado = 0;
    for (let i = 0; i < numeros.length; i++); {
        nuevoArray.push(numeros[i]**2);
    }

    //return nuevoArray;
    return nuevoArray.sort((a, b) => a - b);
}

console.log(elevarCuadrado([2, -5, -7 , 8])); 

// _________________________


