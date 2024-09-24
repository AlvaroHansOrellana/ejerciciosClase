// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

function contarLetra(frase, letra) {
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
      if (frase[i] === letra) {
        contador++;
      }
    }

    return contador;
  }

  const frase = "que dia tan largo";
  const letra = "o";
  const resultado = contarLetra(frase, letra);
  console.log(`La letra "${letra}" aparece ${resultado} veces en la frase.`);