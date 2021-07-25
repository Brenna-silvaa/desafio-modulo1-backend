
function solucao(min, max, valores) {
    let valoresPermitidos = valores.filter(numero => {
        return numero >= min && numero <= max
    })
    console.log(valoresPermitidos);
  
}