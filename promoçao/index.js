function solucao(precos) {
    let maisBarato = Math.min(...precos);
    let valorTotal = precos.reduce((acc, item) => {
    return acc + item
    });

    if (precos.length >= 3){
    console.log(valorTotal - maisBarato * 0.5)
    } else {
    console.log(valorTotal)
    }
  
}