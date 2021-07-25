
function solucao(numeros) {
    const soma = numeros.reduce((acc, item) => {
      return acc + item;
  });
  
  if (soma % numeros.length > 0){
      console.log(soma % numeros.length)
  } else {
      console.log(numeros.length)
  }
  
}