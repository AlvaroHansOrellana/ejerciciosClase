// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números


function imprimirImpares(numero) {
    for (let i = numero; i <= numero + 50; i++) {
      if (i % 2 !== 0) console.log(i); 
    }
  }
  console.log(imprimirImpares(15));
  