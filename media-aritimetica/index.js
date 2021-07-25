
function solucao(lista) {
    const soma = lista.reduce((acc, item) => {
  return acc + item;
});

const media = soma/lista.length;

console.log(media);

}